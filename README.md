# Node.js API + testing with no frameworks

## Features Checklist 

- Web API
    - [x] it should have an endpoint for storing courses data
    - [x] it should have an endpoint for retrieving courses data
    - [x] it should have an endpoint for updating courses data
    - [x] it should have an endpoint for deleting courses data

    - [x] it should have an endpoint for storing users data
    - [x] it should have an endpoint for retrieving users data
    - [x] it should have an endpoint for updating users data
    - [x] it should have an endpoint for deleting users data

## Fill in enviroment variables

```bash
 # Create .env file
 - Rename .env.example to .env
 - Fill in all informations about your enviroment variables

```

## How to Run this Project

```bash
# Install all dependencies to run the server
$ yarn install or npm install

# Generate Prisma files to database sync
$ yarn prisma db push or npx prisma db pull

# Running the server
$ yarn start or npm run start

# The server is going to run at port that have decided on .env - access <http://localhost:PORT>
```

## Tests

```bash

# e2e tests
$ yarn test

```