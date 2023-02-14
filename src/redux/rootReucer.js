import {combineReducers} from "redux"
import allBlogReducer from "./allBlog/allBlogReducer"
import filterReducer from "./blogFilter/filterReducer";


const rootReducer = combineReducers({
    allBlog : allBlogReducer,
    filterBlog: filterReducer,
})

export default rootReducer;