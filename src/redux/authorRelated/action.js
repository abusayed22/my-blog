import { AUTHOR_DATA_ERROR, AUTHOR_DATA_LOADED, AUTHOR_DATA_LOADING } from "./actionTypes"

export const author_loaded = (data) => {
    return{
        type: AUTHOR_DATA_LOADED,
        payload: data
    }
}
export const author_loading = () => {
    return{
        type: AUTHOR_DATA_LOADING,
    }
}
export const author_error = (err) => {
    return{
        type: AUTHOR_DATA_ERROR,
        payload: err
    }
}