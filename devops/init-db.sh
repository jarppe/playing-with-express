#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    grant all privileges on database hello to $POSTGRES_USER;
    create table if not exists messages (
      id serial primary key,
      message text
    );
EOSQL
