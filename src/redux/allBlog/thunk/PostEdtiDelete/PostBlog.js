// comment thunk here becouse updating thunk with update redux single state 
import axios from "axios";
import { single_loading, single_loaded, single_error, post_comment, post_comment_error, post_comment_loading, blog_post, blog_post_error, blog_post_loading } from "../../action";


const PostBlog = ( postValue ) => async (dispatch) => {

    dispatch(blog_post_loading());
    try {
        const res = await axios.post(`http://localhost:9000/videos2/`, postValue,
            { headers: { "Content-type": "application/json; charset=UTP-8" } });

        dispatch(blog_post(postValue))
        console.log('done');

    } catch (error) {
        dispatch(blog_post_error(error));
    }
}

export default PostBlog;
