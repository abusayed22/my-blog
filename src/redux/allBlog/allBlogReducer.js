import { LOADED, SINGLE_LOADED, FAILD, LOADING, SINGLE_LOADING, SINGLE_FAILD } from "./actionTypes";
import { produce } from "immer"
import { Castle } from "@mui/icons-material";

// const initialState = {
//     blogs: [],
//     blog: []
// }

const initialState = {
    blogs: {
        blogs: [],
        isLoadindg: false,
        isError: null
    },
    blog: {
        blog: {},
        isLoading: false,
        isError: null
    }
}

const allBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            // TODO: this is spread way
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: action.payload,
                    isLoadindg: false,
                    isError: null
                }
            }
        case LOADING:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: true,
                    isError: null
                }
            }
        case FAILD:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: false,
                    isError: action.payload
                }
            }
        // TODO: is not working in immer way
        // return produce(state.blogs,(draftState) => {
        //     draftState.blogs = action.payload;
        //     draftState.isLoadindg = false;
        //     draftState.isError = false;
        // })

    
        //single fetch opparations
        case SINGLE_LOADED:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }
        case SINGLE_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }
        case SINGLE_FAILD:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }

    }
    return state;
}

export default allBlogReducer;