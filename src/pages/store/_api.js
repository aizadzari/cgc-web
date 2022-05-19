import { get } from "../../store/Helpers"

export const getPost = () => {
    return get(`posts`).then(result => {
        return result 
    })
}

export const getPostById = (id) => {
    return get(`posts/${id}`).then(result => {
        return result 
    })
}

export const getPostComments = (id) => {
    return get(`posts/${id}/comments`).then(result => {
        return result 
    })
}