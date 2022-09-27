import { Router } from "express"
import * as archiveService from '../services/archive_service'

const router = Router()
const {getAllArchivePosts, addToArchive, removeFromArchive} = archiveService.default

router.get('/', async (req, res) => {
    const posts = await getAllArchivePosts()
    res.send(posts)
})

router.post('/add/:id', async (req, res) => {
    const id: string = req.params.id
    const response: string = await addToArchive(id)
    res.send(response)
})

router.delete('/delete/:id', async (req, res) => {
    const id: string = req.params.id
    const response: string = await removeFromArchive(id)
    res.send(response)
})
 
export default router