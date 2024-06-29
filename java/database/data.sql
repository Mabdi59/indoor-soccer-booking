-- Begin transaction
BEGIN TRANSACTION;

-- Insert initial data into users table
INSERT INTO users (username, password_hash, role, email, phone) VALUES
('user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'ROLE_USER', 'user@example.com', '123-456-7890'),
('admin', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'ROLE_ADMIN', 'admin@example.com', '098-765-4321');

-- Commit transaction
COMMIT TRANSACTION;
