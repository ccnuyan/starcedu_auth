DROP SCHEMA IF EXISTS public CASCADE;
DROP SCHEMA IF EXISTS starcedu_auth CASCADE;

CREATE SCHEMA starcedu_auth;
SET search_path = starcedu_auth;

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA starcedu_auth;