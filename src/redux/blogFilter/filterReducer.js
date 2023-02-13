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
                ...state,
                tags: [
                    ...state.tags.splice(0,action.payload),
                    ...state.items.splice(1)
                ]
            }

        default:
            break;
    }
}
export default filterReducer;