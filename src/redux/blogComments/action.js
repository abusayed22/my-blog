import { COMMENT_LOADED, COMMENT_POST } from "./actionType"

export const post_comment = ({ id, comment }) => {
    return {
        type: COMMENT_POST,
        payload: { id, comment }
    }
}

export const comment_loaded = (allComments) => {
    return {
        type: COMMENT_LOADED,
        payload: allComments
    }
}