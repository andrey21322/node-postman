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

async function getAllStats() {
    let posts: IPost[] = await findAllPosts('posts')
    let archive: IPost[] = await findAllPosts('archive')

    return `Posts: ${posts.length}. Archive: ${archive.length}`
}

async function editPost(post: IPost) {
    try {
        let posts: IPost[] = await findAllPosts('posts')
        let item = posts.find(item => item.id.toString() === post.id)
        if(item) {
            posts.map((item, i) => {
                if(item.id.toString() === post.id.toString()) {
                    db.push(`/posts[${i}]`, post)
                }
            })
            return 'pots edited'
        } else {
            return 'no post with this id'
        }
        
    } catch (e) {
        return e
    }
}

async function getCurrentPost(id: string) {
    try {
        let posts: IPost[] = await db.getData("/posts")
        let post = posts.find(item => item.id.toString() === id)
        if(post) {
            return post
        } else {
            return 'no post with this id'
        }
       
    } catch (e) {
        return e
    } 
}

async function deleteCurrentPost(id: string) {
    try {
        let posts: IPost[] = await findAllPosts('posts')
        let item = posts.find(item => item.id.toString() === id)
        if(item) {
            posts.map((item, i) => {
                if(item.id === id){
                    db.delete(`/posts[${i}]`);
                }
            })  
            return 'post deleted'
        } else {
            return 'no post with this id'
        }
    } catch (e) {
        return e
    }
}

async function addPost(post: IPost) {
    try {
        let posts: IPost[] = await findAllPosts('posts')
        let item = posts.find(item => item.id.toString() === post.id)
        if(item) {
            return 'there is already a post with this id'
        } else {
            posts.push(post)
            db.push("/posts", posts)
            return 'post created'
        }
    } catch (e) {
        return e
    }
}

export default {findAllPosts, getAllStats, editPost, getCurrentPost, deleteCurrentPost, addPost}
