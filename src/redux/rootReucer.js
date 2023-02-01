import {combineReducers} from "redux"
import allBlogReducer from "./allBlog/allBlogReducer"

const rootReducer = combineReducers({
    allBlog : allBlogReducer
})

export default rootReducer;