import { COMMENT_LOADED, COMMENT_POST } from "./actionType";

const initialState = {
    comments: [],
    isFalse: false,
    isError: false
}
const commentsReducer = (state = initialState, action) => {
    switch (action.payload) {
        case COMMENT_LOADED:
            return {
                ...state,
                comments: action.payload
            }

        case COMMENT_POST:
            return {

            }
            
            break;
    
        default:
            break;
    }
}


export default commentsReducer;