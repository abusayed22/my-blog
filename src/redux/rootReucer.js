import {combineReducers} from "redux"
import allBlogReducer from "./allBlog/allBlogReducer"
import filterReducer from "./blogFilter/filterReducer";
import authReducer from "./userAuth/authReducer";


const rootReducer = combineReducers({
    allBlog : allBlogReducer,
    filterBlog: filterReducer,
    // user: authReducer,
})

export default rootReducer;