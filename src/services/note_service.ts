import {IPost} from '../helpers/helper'
import * as noteRep from '../repositories/note'

const {findAllPosts, getAllStats, editPost, getCurrentPost, deleteCurrentPost, addPost} = noteRep.default

function getAllPosts() {
    return findAllPosts('posts')
}

function getStats() {
    return getAllStats()
}

function updatePost(post: IPost) {
    if(post.name.length < 3 || post.content.length < 3) {
        return 'Name and content length cant be less then 3'
    } else {
    return editPost(post)
    }
}

function getPost(id: string) {
    return getCurrentPost(id)
}

function addNewPost(post: IPost) {
    if(post.name.length < 3 || post.content.length < 3) {
        return 'Name and content length cant be less then 3'
    } else {
        const dateAt = new Date().toLocaleString('eng', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })

        post.dateAt = dateAt 
        post.updatedDate = ""
        return addPost(post)
    }
}

function deletePost(id: string) {
    return deleteCurrentPost(id)
}

export default {addNewPost, getAllPosts, deletePost, updatePost, getStats, getPost}