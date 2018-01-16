set search_path = starcedu_auth;

create type login_info as(
  id bigint,
  username varchar,
  gender varchar,
  nickname varchar, 
  role int,
  success boolean,
  message varchar
);