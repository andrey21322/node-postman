# RESTful API TODO app
## Description
Application in which implemented RESTful API CRUD approach.
You are able manage posts, edit task if you did mistake or if you want add more description.
Just send task to archive when it's done or delete it if you don't need it anymore.

## Setup
**Open directory with the project in terminal and type**
*npm install*
*npm run prebuild* 
*npm run build*

## Run
*npm run start*

And go to http://localhost:5000

## API Documentation

GET /notes - get all tasks

POST /notes - add task

PATCH /notes/:id - edit task by id

DELETE /notes/:id - delete task by id

GET /notes/stats - get stats

GET /archive - get all archive tasks

POST /archive/:id - add task to archive

DELETE /archive/:id - permanently delete task
