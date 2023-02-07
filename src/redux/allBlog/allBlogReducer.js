import { LOADED,SINGLE_LOADED } from "./actionTypes";

const initialState = {
    blogs: [],
    blog: []
}

const allBlogReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOADED:
            return  {
                ...state,
                blogs: action.payload
            }

        case SINGLE_LOADED:
            return {
                ...state,
                blog: action.payload
            }
    }
    return state;
}

export default allBlogReducer;