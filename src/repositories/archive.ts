import { JsonDB, Config } from 'node-json-db'
import {IPost} from '../helpers/helper'

let db = new JsonDB(new Config("myDataBase", true, false, '/'))

async function findAllPosts(url: string) {
    try {
        let posts: IPost[] = await db.getData(`/${url}`)
        return posts
    } catch (e) {
        return e
    }
}

async function addElementToArchive(id: string) {
    try {
        let allPosts: IPost[] = await findAllPosts('posts')
        let archivePosts: IPost[] = await findAllPosts('archive')
        
        let item = allPosts.find(item => item.id.toString() === id)
        if(item) {
            archivePosts.push(item)

            allPosts.map((item, i) => {
            if(item.id === id){
                db.delete(`/posts[${i}]`)
            }
            })  
            await db.push("/archive", archivePosts)
            
            return 'post added to archive'
        } else {
            return 'no item with this id'
        }
    } catch(e) {
        return e
    }
}

async function deleteFromArchive(id: string) {
    try {
        let allPosts: IPost[] = await findAllPosts('posts')
        let archivePosts: IPost[] = await findAllPosts('archive')
       
        let item = archivePosts.find(item => item.id.toString() === id)
        if(item) {
            allPosts.push(item)

            archivePosts.map((item, i) => {
                if(item.id === id){
                    db.delete(`/archive[${i}]`)
                }
            })  

            await db.push("/posts", allPosts)

            return 'post removed from archive'
        } else {
            return 'no item with this id'
        }
    } catch(e) {
        return e
    }
}
 
export default {findAllPosts, addElementToArchive, deleteFromArchive}
