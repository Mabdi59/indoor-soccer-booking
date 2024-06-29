-- **************************************************************
-- This script destroys the database and associated users
-- **************************************************************

-- The following line terminates any active connections to the database so that it can be destroyed
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'indoor_db';

-- Drop the database if it exists
DROP DATABASE IF EXISTS indoor_db;

-- Drop users if they exist
DROP USER IF EXISTS indoor_owner;
DROP USER IF EXISTS indoor_appuser;
