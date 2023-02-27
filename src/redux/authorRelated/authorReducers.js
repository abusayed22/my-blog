import { AUTHOR_DATA_ERROR, AUTHOR_DATA_LOADED, AUTHOR_DATA_LOADING } from "./actionTypes";

const initialState = {
    authorOf: [],
    isLoading: false,
    isError: null
}
const authorReducers = (state = initialState, action) => {

    switch (action.type) {
        case AUTHOR_DATA_LOADED:
            return {
                ...state,
                authorOf: action.payload,
                isLoading: false,
                isError: null
            }
        
        case AUTHOR_DATA_LOADING:
            return {
                ...state,
                authorOf: [],
                isLoading: true,
                isError: null
            }
        case AUTHOR_DATA_ERROR:
            return {
                ...state,
                authorOf: [],
                isLoading: false,
                isError: action.payload
            }

        default:
           return state
    }
}

export default authorReducers;