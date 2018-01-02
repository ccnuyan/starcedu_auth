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
    update logins set provider_token = crypt(new_pass, gen_salt('bf',10))
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



