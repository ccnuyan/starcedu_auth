set search_path = starcedu_auth;

create or replace function locate_user_by_password(username varchar, pass varchar)
returns bigint
as $$
  SET search_path=starcedu_auth, public;

  select user_id from logins where
  provider_key = username and
  provider_token = public.crypt(pass::text, provider_token::text);
$$
language sql;
