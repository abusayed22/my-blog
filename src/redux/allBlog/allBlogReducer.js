import { LOADED,SINGLE_LOADED,FAILD, LOADING } from "./actionTypes";
import {produce} from "immer"

// const initialState = {
//     blogs: [],
//     blog: []
// }

const initialState = {
    blogs:{
        blogs: [],
        isLoadindg: false,
        isError: null
    },
    blog:{
        blog: [],
        isLoadindg: false,
        isError: null
    }
}

const allBlogReducer = (state = initialState,action) => {
    switch(action.type) {
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
  

        case SINGLE_LOADED:
            return produce(state, (draftState) => {
                draftState.blog = action.payload
            })
    }
    return state;
}

export default allBlogReducer;