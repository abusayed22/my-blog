import { TAG_REMOVED,TAG_SELECT } from "./actionTypes"

export const tag_select = (serachTag) => {
    return {
        type: TAG_SELECT,
        payload: serachTag
    }
}

export const removed_tag = (removeTag) => {
    return {
        type: TAG_REMOVED,
        payload:removeTag
    }
}