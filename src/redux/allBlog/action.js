import { LOADED } from "./actionTypes"


export const loaded = (blogs) => {
    return {
        type: LOADED,
        payload: blogs
    }
}