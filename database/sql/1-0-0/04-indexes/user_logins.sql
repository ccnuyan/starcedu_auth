set search_path = starcedu_auth;

ALTER TABLE logins
ADD CONSTRAINT user_logins
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;