import {combineReducers} from "redux"
import allBlogReducer from "./allBlog/allBlogReducer"
import authorReducers from "./authorRelated/authorReducers";
import filterReducer from "./blogFilter/filterReducer";
import authReducer from "./userAuth/authReducer";


const rootReducer = combineReducers({
    allBlog : allBlogReducer,
    filterBlog: filterReducer,
    user: authReducer,
    author: authorReducers,
})

export default rootReducer;