import { LOADED, SINGLE_LOADED, LOADING, FAILD, SINGLE_LOADING, SINGLE_FAILD, RELATED_LOADED, RELATED_LOADING, RELATED_FAILD,COMMENT_POST, COMMENT_POST_ERROR, LIKED, COMMENT_LOADING, LIKED_LOADING, LIKED_ERROR, DELETE_COMMENT, DELETE_COMMENT_ERROR, DELETE_COMMENT_LOADING, EDIT_UPDATED, EDIT_UPDATED_LOADING, EDIT_UPDATED_ERROR, BLOG_POST, BLOG_POST_ERROR, BLOG_LOADING } from "./actionTypes"
import commentPost from "./thunk/commentRelated/commentPost"


export const loaded = (blogs) => {
    return {
        type: LOADED,
        payload: blogs
    }
}
export const loading = () => {
    return {
        type: LOADING,
    }
}
export const fail = (err) => {
    return {
        type: FAILD,
        payload: err
    }
}

// single action
export const single_loaded = (blog) => {
    return {
        type: SINGLE_LOADED,
        payload: blog
    }
}

export const single_loading = () => {
    return {
        type: SINGLE_LOADING,
    }
}

export const single_error = (err) => {
    return {
        type: SINGLE_FAILD,
        payload: err
    }
}

// related actions
export const related_loaded = (blogs) => {
    return {
        type: RELATED_LOADED,
        payload: blogs
    }
}
export const related_loading = () => {
    return {
        type: RELATED_LOADING,
    }
}
export const related_fail = (err) => {
    return {
        type: RELATED_FAILD,
        payload: err
    }
}

// comment related action
// comment post
export const post_comment = (commentObj) => { 
    return {
        type: COMMENT_POST,
        payload: commentObj
    }
}
export const post_comment_error = (err) => {
    return {
        type: COMMENT_POST_ERROR,
        payload: err
    }
}
export const post_comment_loading = () => {
    return {
        type: COMMENT_LOADING,
    }
}

// comment delete
export const deleted_comment = (commentObj) => { 
    return {
        type: DELETE_COMMENT,
        payload: commentObj
    }
}
export const deleted_comment_error = (err) => {
    return {
        type: DELETE_COMMENT_ERROR,
        payload: err
    }
}
export const deleted_comment_loading = () => {
    return {
        type: DELETE_COMMENT_LOADING,
    }
}

// edit updated
export const edit_updated = (editValue) => { 
    return {
        type: EDIT_UPDATED,
        payload: editValue
    }
}
export const edit_updated_loading = () => { 
    return {
        type: EDIT_UPDATED_LOADING,
    }
}
export const edit_updated_error = (err) => { 
    return {
        type: EDIT_UPDATED_ERROR,
        payload: err
    }
}

// liked related action
export const liked = (likedObject) => {
    return{
        type: LIKED,
        payload: likedObject
    }
}
export const liked_loading = () => {
    return {
        type:LIKED_LOADING
    }
}
export const liked_error = (err) => {
    return{
        type: LIKED_ERROR,
        payload: err
    }
}

//     =========================== BLOG ==============================
// blog post 
export const blog_post = (post) => { 
    return {
        type: BLOG_POST,
        payload: post
    }
}
export const blog_post_error = (err) => {
    return {
        type: BLOG_POST_ERROR,
        payload: err
    }
}
export const blog_post_loading = () => {
    return {
        type: BLOG_LOADING,
    }
}