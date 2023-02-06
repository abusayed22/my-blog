import { LOADED } from "./actionTypes";

const initialState = []

const allBlogReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOADED:
            return action.payload

    }
    return state;
}

export default allBlogReducer;