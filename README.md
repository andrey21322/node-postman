# task-3

## Step one `install`

## `npm install`

## `npm run prebuild`

## `npm run build`
## `npm run start`
or `npx nodemon index.ts` :)

## Step two `routes in postman` 

##   GET `http://localhost:5000/notes` - get all posts
##   GET `/notes/stats` - get stats
##   DELETE `/notes/:id` - delete from posts
      (use id 5,6,7)
##   POST `/notes` - add to posts
      (keys: name, id, content, date, updatedDate, category)
##   PATCH `/notes/:id` - edit post in posts
      (keys: name, content, category, updatedDate. Use id 5,6,7)
      
##   GET `http://localhost:5000/archive` - get all archive posts
##   POST `/:id` - add to archive
      (use id 5,6,7)
##   DELETE `/:id` - remove from archive
      (use id 1,2,3)
