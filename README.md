# Server/Website Backend Boilerplate

## Overview
Functions as a basic template for servers/back ends

Currently configured to run off of a PostgreSQL database, with only development and production environments.

Run `npm install` to install dependencies

## Scripts
`knex` runs knex  
`migrate` run knex DB migrations  
`reset` rolls back knex seeds and migrations, then reseeds and migrates  
`rollback` rolls back migrations  
`seed` runs knex seeds  
`start` starts server (node)  
`start:dev` starts auto refreshing server (nodemon)  

## Dependencies
Node  
Express  
Knex  
Nodemon  