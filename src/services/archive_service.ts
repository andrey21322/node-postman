import * as archiveRep from '../repositories/archive'

const {findAllPosts, addElementToArchive, deleteFromArchive} = archiveRep.default

function getAllArchivePosts() {
    return findAllPosts('archive')
}
function addToArchive(id: string) {
    return addElementToArchive(id)
}
function removeFromArchive(id: string) {
    return deleteFromArchive(id)
}
 
export default {getAllArchivePosts, addToArchive, removeFromArchive}