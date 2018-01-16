DROP SCHEMA IF EXISTS starcedu_auth CASCADE;

CREATE SCHEMA starcedu_auth;
SET search_path = starcedu_auth;

DROP EXTENSION IF EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA starcedu_auth;