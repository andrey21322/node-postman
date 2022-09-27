# task-3

## Step one `install`

## `npm-install`

## `npm run prebuild`

## `npm run build`

## `npm run start`
or `npx nodemon index.ts` :)

## Step two `routes in postman` 

##   GET `http://localhost:5000/posts` - get all posts
##   GET `/posts/stats` - get stats
##   DELETE `/delete/:id` - delete from posts
      (use id 5,6,7)
##   POST `/add` - add to posts
      (keys: name, id, content, date, updatedDate, category)
##   PATCH `/edit/:id` - edit post in posts
      (keys: name, content, category, updatedDate. Use id 5,6,7)
      
##   GET `http://localhost:5000/archive` - get all archive posts
##   POST `/add/:id` - add to archive
      (use id 5,6,7)
##   DELETE `/delete/:id` - remove from archive
      (use id 1,2,3)
