import { Router } from "express"
import * as noteService from '../services/note_service'

const router = Router()
const {addNewPost, getAllPosts, deletePost, updatePost, getPost} = noteService.default

router.get('/', async (req, res) => {
    res.send(await getAllPosts())
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    let post = await getPost(id)
    res.send(post)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    let response = await deletePost(id.toString())
    res.send(response)
})

router.post('/', async (req, res) => {
    const post = req.body
    let response = await addNewPost(post)
    res.send(response)
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const post = req.body
    post.id = id
    await updatePost(post)
    res.redirect('/notes')
})

export default router
