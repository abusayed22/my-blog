import { SEARCH, TAG_REMOVED,TAG_SELECT } from "./actionTypes"

export const tag_select = (tag) => {
    return {
        type: TAG_SELECT,
        payload: tag,
    }
}

export const removed_tag = (removeTag) => {
    return {
        type: TAG_REMOVED,
        payload:removeTag
    }
}

export const search = (searchKey) => {
    return {
        type: SEARCH,
        payload: searchKey
    }
}