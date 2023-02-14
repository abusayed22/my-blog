        
        // case TAG_REMOVED: 
        //     return {
        //         ...state,
                // tags: [
                //     ...state.tags.splice(0,action.payload),
                //     ...state.items.splice(1)
                // ]
                // ...state.tags.slice(action.payload,0)


import produce from "immer";
import { TAG_SELECT ,TAG_REMOVED, SEARCH} from "./actionTypes";



const initialState = {
    tags: [],
    search: null
}


const filterReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TAG_SELECT:
            return {
                ...state,
                
            }
            
        // case TAG_REMOVED:
        //     return {
                
        //     }

        case SEARCH: 
            return {
                ...state,
                search: action.payload
            }
        

    }
    return state;
}

export default filterReducer;