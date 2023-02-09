import { LOADED, SINGLE_LOADED, LOADING, FAILD } from "./actionTypes"


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


export const single_loaded = (blog) => {
    return {
        type: SINGLE_LOADED,
        payload: blog
    }
}

