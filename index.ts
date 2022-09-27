import express from "express";
import posts from "./src/routes/notesRoutes";
import archive from "./src/routes/archiveRoutes";
import bodyParser from "body-parser"

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use("/posts", posts)
app.use("/archive", archive)

app.listen( port, () => {
    console.log(`server started at http://localhost:${ port }`)
})