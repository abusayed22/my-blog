import { COMMENT_POST } from "../commentCRUD/actionType"
import { LOADED, SINGLE_LOADED, LOADING, FAILD, SINGLE_LOADING, SINGLE_FAILD, RELATED_LOADED, RELATED_LOADING, RELATED_FAILD } from "./actionTypes"


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

// comment
export const post_comment = (comment) => {
    return {
        COMMENT_POST,
        payload: comment
    }
}