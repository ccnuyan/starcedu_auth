drop schema if exists starcedu_auth CASCADE;

create schema starcedu_auth;
set search_path = starcedu_auth;

create extension if not exists pgcrypto with schema starcedu_auth;