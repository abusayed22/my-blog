import { loaded } from "../action";

const fetchBlog = async (dispatch, getState) => {
    
    const res = await fetch('http://localhost:9000/videos');
    const blogs = await res.json()

    dispatch(loaded(blogs))

}

export default fetchBlog;