import { TAG_SELECT,TAG_REMOVED } from "./actionTypes";


const initialState = {
    tags: [],
    search: ''
}


const filterReducer = (state= initialState, action) => {
    switch (action.type) {
        case TAG_SELECT:
            return {
                ...state.tags.push(action.payload)
            }
        
        case TAG_REMOVED: 
            return {
                ...state.
            }

        default:
            break;
    }
}
export default filterReducer;