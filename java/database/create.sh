#!/bin/bash
export PGPASSWORD='postgres1'
BASEDIR=$(dirname $0)
DATABASE=indoor_db

# Drop the existing database and roles, recreate the database, and apply schema and data
{
    psql -U postgres -f "$BASEDIR/dropdb.sql" &&
    createdb -U postgres $DATABASE &&
    psql -U postgres -d $DATABASE -f "$BASEDIR/schema.sql" &&
    psql -U postgres -d $DATABASE -f "$BASEDIR/data.sql" &&
    psql -U postgres -d $DATABASE -f "$BASEDIR/user.sql"
} || {
    echo "An error occurred during the database setup."
    exit 1
}

echo "Database setup completed successfully."
