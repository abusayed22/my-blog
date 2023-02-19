import { COMMENT_POST } from "./actionType";

const initialState = {
    
}

const commentReducers = (state = initialState, action) => {
    switch (action.payload) {
        case COMMENT_POST:
            return {
                ...state,

            }
            break;
    
        default:
            break;
    }
}