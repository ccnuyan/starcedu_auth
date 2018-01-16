CREATE SCHEMA IF NOT EXISTS public;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;

DROP SCHEMA IF EXISTS starcedu_auth CASCADE;

CREATE SCHEMA starcedu_auth;
SET search_path = starcedu_auth;