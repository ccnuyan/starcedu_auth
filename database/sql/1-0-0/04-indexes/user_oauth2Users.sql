set search_path = starcedu_auth;

ALTER TABLE oauth2Users
ADD CONSTRAINT user_oauth2Users
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;