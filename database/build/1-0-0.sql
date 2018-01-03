set search_path = starcedu_auth;
drop schema if exists starcedu_auth CASCADE;

create schema starcedu_auth;
set search_path = starcedu_auth;

create extension if not exists pgcrypto with schema starcedu_auth;
set search_path = starcedu_auth;

create sequence id_sequence;

create or replace function id_generator(out new_id bigint)
as $$
DECLARE
  our_epoch bigint := 1483200000000; -- 2017/05/01
  seq_id bigint;
  now_ms bigint;
  shard_id int := 1;
BEGIN
  SET search_path = starcedu_auth;
  SELECT nextval('id_sequence') %1024 INTO seq_id;
  SELECT FLOOR(EXTRACT(EPOCH FROM now()) * 1000) INTO now_ms;
  new_id := (now_ms - our_epoch) << 23;
  new_id := new_id | (shard_id << 10);
  new_id := new_id | (seq_id);
END;
$$
LANGUAGE PLPGSQL;


set search_path = starcedu_auth;

create or replace function random_string(len int default 36)
returns text
as $$
select upper(substring(md5(random()::text), 0, len+1));
$$ 
language sql;

create type login_info as(
  id bigint,
  username varchar,
  gender varchar,
  nickname varchar, 
  role int,
  success boolean,
  message varchar
);
create table logins(
  id bigint primary key default id_generator(),

  user_id bigint not null,
  
  provider varchar(64) not null default 'local',
  -- local, token, qq/weixin/weibo

  provider_key varchar(255),
  -- local: username
  -- token: null
  -- qq/weixin/weibo: 'token'
  
  provider_token varchar(4096) not null
  -- local: password
  -- token: jwttoken
  -- qq/weixin/weibo: jwttoken
);
create table oauth2Users(
  id bigint primary key not null default id_generator(),

  user_id bigint,
  -- null if not bound

  unique_provider_id varchar(255) not null,
  provider varchar(16) not null,
  profile json
);
create table users(
  id bigint primary key not null default id_generator(),
  
  user_key varchar(18) default random_string(18) not null,
  username varchar(255) unique not null,
  role int default -1, -- 99/student 10/teacher; 0/admin
  login_count int default 0 not null,
  last_login timestamptz,
  created_at timestamptz default now() not null,

  --profile
  nickname varchar(64),
  gender varchar(16)
);
ALTER TABLE oauth2Users
ADD CONSTRAINT provider_key UNIQUE (provider, unique_provider_id);
ALTER TABLE logins
ADD CONSTRAINT user_logins
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;
ALTER TABLE oauth2Users
ADD CONSTRAINT user_oauth2Users
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;
-- logins intruduction

-- for local user
  -- provider is 'local'
  -- provider_key is username
  -- provider_token is password

-- for token user
  -- provider is 'token'
  -- provider_key is 'token'
  -- provider_token is jwttoken
  
-- for oauth2 user
  -- provider is 'qq'
  -- provider_key is 'token'
  -- provider_token is jwttoken
set search_path = starcedu_auth;

create or replace function add_login(
  input_user_id bigint, 
  input_key varchar(50), 
  input_token varchar(4096), 
  input_new_provider varchar(50))
returns TABLE(
  message varchar(255),
  success boolean
) as
$$
DECLARE
  success boolean :=false;
  message varchar(255) := 'user with this username not found';
  data_result json;
BEGIN
  if input_user_id is not null then
  
    -- replace the provider for this user completely
    delete from logins where 
      logins.user_id = input_user_id AND 
      logins.provider = input_new_provider;

    -- add the login
    insert into logins(user_id, provider_key, provider_token, provider)
    values (input_user_id, input_key, input_token, input_new_provider);

    -- add log entry
    -- insert into logs(subject, entry, user_id, created_at)
    -- values('Authentication','Added ' || new_provider || ' login',userid,now());

    success := true;
    message :=  'added login successfully';
  end if;

  return query
  select message, success;

END;
$$
language plpgsql;


set search_path = starcedu_auth;

CREATE or REPLACE FUNCTION authenticate(
  -- Three modes authentication      mode1    / mode2   / mode3
  input_username VARCHAR,               -- username / 'token' / 'token'
  input_password VARCHAR,               -- password / token   / token 
  input_provider VARCHAR DEFAULT 'local',   -- 'local'  / 'token' / 'qq'
  input_oauth_user_id BIGINT DEFAULT NULL -- if provided, use a oauth binding mode
)
RETURNS starcedu_auth.login_info AS $$
DECLARE
  oauth_user starcedu_auth.oauth2Users;
  found_user starcedu_auth.users;
  return_message VARCHAR(50);
  success BOOLEAN := FALSE;
  found_id BIGINT;
BEGIN
  SET search_path=starcedu_auth;
  --find the user by token/provider and username

  IF (input_provider = 'local') THEN
    SELECT locate_user_by_password(input_username, input_password) INTO found_id;
  ELSE
    SELECT user_id FROM logins WHERE
    provider = input_provider AND
    provider_token = input_password INTO found_id;
  end IF;
  
  IF(found_id IS NOT NULL) THEN
    SELECT * FROM users WHERE users.id = found_id INTO found_user;
    --set a last_login
    UPDATE users SET last_login = now(), login_count=login_count+1
    WHERE users.id = found_id;

    -- binding check
    IF input_oauth_user_id IS NOT NULL THEN
      -- get the oauth2 user to bind
      SELECT * INTO oauth_user FROM oauth2Users WHERE oauth2Users.id = input_oauth_user_id;
      IF NOT FOUND THEN
        success := FALSE;
        return_message := 'oauth user not found', input_oauth_user_id;
      ELSE
        UPDATE oauth2Users SET user_id = found_id WHERE oauth2Users.id = input_oauth_user_id;
        success := TRUE;
        return_message := 'authenticate and bind successfully';
      END IF;
      -- bind operation
    ELSE
      success := TRUE;
      return_message := 'authenticate successfully';
    END IF;
  ELSE
    success := FALSE;
    return_message := 'username/password invalid';
  end IF;
  
  return (found_user.id, 
    found_user.username, 
    found_user.nickname,
    found_user.gender, 
    found_user.role,  
    success, 
    return_message)::starcedu_auth.login_info;
END;
$$
language plpgsql;

-- authentication in provider callback
CREATE or REPLACE FUNCTION oauth_authenticate(
  input_provider_id VARCHAR,
  input_provider VARCHAR
)
RETURNS starcedu_auth.login_info AS $$
DECLARE
  return_message VARCHAR(50);
  success BOOLEAN := FALSE;
  found_user starcedu_auth.users;
  found_id BIGINT;
BEGIN
  SET search_path=starcedu_auth;
  --find the user by token/provider and un

  SELECT user_id FROM oauth2Users WHERE
  provider = input_provider AND
  unique_provider_id = input_provider_id INTO found_id;

  IF(found_id IS NOT NULL) THEN
    SELECT * FROM users WHERE users.id = found_id INTO found_user;
    --set a last_login
    UPDATE users SET last_login = now(), login_count=login_count+1
    WHERE users.id = found_id;

    success := TRUE;
    return_message := '3rd party authenticate successfully';
  ELSE
    success := FALSE;
    return_message := '3rd party authenticate failed';
  end IF;
  
  return (found_user.id, 
    found_user.username, 
    found_user.nickname,
    found_user.gender, 
    found_user.role,  
    success, 
    return_message)::starcedu_auth.login_info;
END;
$$
LANGUAGE PLPGSQL;
set search_path = starcedu_auth;

create or replace function locate_user_by_password(username varchar, pass varchar)
returns bigint
as $$
  set search_path=starcedu_auth;
  select user_id from logins where
  provider_key = username and
  provider_token = public.crypt(pass, provider_token);
$$
language sql;

set search_path = starcedu_auth;

create or replace function get_oauth_users(bind_user_id bigint)
returns oauth2Users
as $$
DECLARE
  result oauth2Users;
BEGIN
  set search_path=starcedu_auth;
  select * from oauth2Users where oauth2Users.user_id = bind_user_id into result;
  return result;
END;
$$
language plpgsql;

create or replace function unlink_oauth_user(oauth_user_id bigint, bind_user_id bigint)
returns oauth2Users
as $$
DECLARE
  found_id bigint;
  result oauth2Users;
BEGIN
  set search_path=starcedu_auth;
  --find the user based on username/password
  select id from oauth2Users where oauth2Users.id=oauth_user_id and oauth2Users.user_id=bind_user_id into found_id;
  if found_id is not null then
    --change the password if all is OK
    update oauth2Users set user_id = null where oauth2Users.id=found_id;
  end if;
  select * from get_oauth_users(bind_user_id) into result;
  return result;
END;
$$
language plpgsql;


SET search_path = starcedu_auth;


CREATE OR REPLACE FUNCTION register(
  un VARCHAR, 
  password VARCHAR, 
  oauth_user_id BIGINT DEFAULT NULL)
RETURNS starcedu_auth.login_info
as $$
DECLARE
  oauth_user starcedu_auth.oauth2Users;
  new_user starcedu_auth.users;
  token VARCHAR(64);
  success BOOLEAN DEFAULT FALSE;
  return_message VARCHAR(64);
BEGIN
  SET search_path=starcedu_auth;
    
  IF NOT EXISTS (SELECT username FROM users WHERE username = un)
  THEN
    -- add them, get new id

    INSERT INTO users(username, role)
    VALUES (un, -1) -- normal user role is 10
    RETURNING * INTO new_user;

    -- add login for local
    -- username as provider_key
    INSERT INTO logins(user_id, provider_key, provider_token)
    VALUES(new_user.id, new_user.username, public.crypt(password, public.gen_salt('bf', 10)));

    -- binding check
    IF oauth_user_id IS NOT NULL THEN
      -- get the oauth2 user to bind
      SELECT * INTO oauth_user FROM oauth2Users WHERE oauth2Users.id = oauth_user_id;
      IF NOT FOUND THEN
        success := FALSE;
        return_message := 'oauth user not found', oauth_user_id;
      ELSE
        UPDATE oauth2Users SET user_id = new_user.id WHERE oauth2Users.id = oauth_user_id;
        success := TRUE;
      END IF;
      -- bind operation
    ELSE
      success := TRUE;
      return_message := 'register and bind successfully';
    END IF;
      
    success := TRUE;
    return_message := 'register successfully';
  ELSE
    success := FALSE;
    select 'user with this username already existed' INTO return_message;
  END IF;

  -- return the goods
  return (new_user.id, 
    new_user.username, 
    new_user.gender, 
    new_user.nickname, 
    new_user.role, 
    success,
    return_message)::starcedu_auth.login_info;
END;
$$
LANGUAGE PLPGSQL;
set search_path = starcedu_auth;

create or replace function update_password(input_username varchar, old_pass varchar, new_pass varchar)
RETURNS login_info AS 
$$
DECLARE
  found_id BIGINT;
  success BOOLEAN;
  return_message VARCHAR;
  return_login_info login_info;
BEGIN
  set search_path=starcedu_auth;
  --find the user based on username/password
  select locate_user_by_password(input_username, old_pass) into found_id;
  IF (found_id IS not NULL) THEN
    --update the password if all is OK
    update logins set provider_token = public.crypt(new_pass, public.gen_salt('bf',10))
    where user_id=found_id and provider='local';
  ELSE
    success := FALSE;
    return_message := 'username/password invalid';
    return (null, null, null, null, null, success, return_message)::login_info;
  END IF;

  select * from authenticate(input_username, new_pass, 'local') into return_login_info;
  return return_login_info;
END;
$$
language plpgsql;




set search_path = starcedu_auth;
-- http://www.w3school.com.cn/sql/index.asp

-- select * from register('ccnuyan@gmail.com', 'password');
select 'Schema initialized' as result;