DROP SCHEMA IF EXISTS starcedu_auth CASCADE;

CREATE SCHEMA starcedu_auth;
SET search_path = starcedu_auth;

CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA starcedu_auth;