import { JsonDB, Config } from 'node-json-db'
import {IPost} from '../helpers/helper'

const db = new JsonDB(new Config("myDataBase", true, false, '/'))

async function findAllPosts(url: string) {
    try {
        const posts: IPost[] = await db.getData(`/${url}`)
        return posts
    } catch (e) {
        return e
    }
}

async function getAllStats() {
    const posts: IPost[] = await findAllPosts('posts')
    const archive: IPost[] = await findAllPosts('archive')

    return `Posts: ${posts.length}. Archive: ${archive.length}`
}

async function editPost(post: IPost) {
    try {
        const posts: IPost[] = await findAllPosts('posts')
        const postItem: IPost = posts.find(item => item.id.toString() === post.id)
        if(postItem) {
            posts.map((item, i) => {
                if(item.id.toString() === post.id.toString()) {
                    post.dateAt = item.dateAt
                    post.date = item.date
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
        const posts: IPost[] = await db.getData("/posts")
        const post: IPost = posts.find(item => item.id.toString() === id)
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
        const posts: IPost[] = await findAllPosts('posts')
        const postItem: IPost = posts.find(item => item.id.toString() === id)
        if(postItem) {
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
        const posts: IPost[] = await findAllPosts('posts')
        const postItem: IPost = posts.find(item => item.id.toString() === post.id)
        if(postItem) {
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
