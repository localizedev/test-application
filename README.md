# Test application

## Requirements

NodeJS 16+ (20.11.1 current)

Docker Desktop (recommended last stable version)

## Installing dependencies

To install dependencies run `npm install`

## Running application

By default application is listening on 3000 port, but it can be changed to different via environment variable `LISTEN_PORT`

To run application, execute `npm run start` or `node src/app.js`

## Building and running your application using Docker

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.