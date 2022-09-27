import { Router } from "express"
import * as noteService from '../services/note_service'

const router = Router()
const {addNewPost, getAllPosts, deletePost, updatePost, getStats, getPost} = noteService.default

router.get('/', async (req, res) => {
    res.send(await getAllPosts())
})

router.get('/post/:id', async (req, res) => {
    const id = req.params.id
    let post = await getPost(id)
    console.log(post)
    res.send(post)
})

router.get('/stats', async (req, res) => {
    const stats = await getStats()
    res.send(`notes count: ${stats}`)
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    let response = await deletePost(id.toString())
    res.send(response)
})

router.post('/add', async (req, res) => {
    const post = req.body
    let response = await addNewPost(post)
    res.send(response)
})

router.patch('/edit/:id', async (req, res) => {
    const id = req.params.id
    const post = req.body
    post.id = id
    await updatePost(post)
    res.redirect('/posts')
})

export default router