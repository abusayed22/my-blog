import { COMMENT_POST } from "./actionType"

export const post_comment = (comment) => {
    return {
        type: COMMENT_POST,
        payload: comment
    }
}