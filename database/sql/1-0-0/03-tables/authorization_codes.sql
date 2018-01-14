set search_path = starcedu_auth;

create table authorization_codes(
  code varchar  primary key default starcedu_auth.random_string(16) not null,
  created_at timestamptz default now(),
  tenant varchar(64) not null,
  state varchar(128) not null,
  user_id bigint not null
);