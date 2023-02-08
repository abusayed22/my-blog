import { LOADED,SINGLE_LOADED } from "./actionTypes";
import {produce} from "immer"

const initialState = {
    blogs: [],
    blog: []
}

const allBlogReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOADED:
            return produce(state, (draftState) => {
                draftState.blogs = action.payload
            })

        case SINGLE_LOADED:
            return produce(state, (draftState) => {
                draftState.blog = action.payload
            })
    }
    return state;
}

export default allBlogReducer;