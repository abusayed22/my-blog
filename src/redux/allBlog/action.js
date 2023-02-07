import { LOADED, SINGLE_LOADED } from "./actionTypes"


export const loaded = (blogs) => {
    return {
        type: LOADED,
        payload: blogs
    }
}

export const single_loaded = (blog) => {
    return {
        type: SINGLE_LOADED,
        payload: blog
    }
}

