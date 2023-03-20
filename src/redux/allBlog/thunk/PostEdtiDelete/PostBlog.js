// comment thunk here becouse updating thunk with update redux single state
import axios from "axios";
import { blog_post, blog_post_error, blog_post_loading } from "../../action";
import { toast } from "react-toastify";

const PostBlog = (postValue) => async (dispatch) => {
  dispatch(blog_post_loading());    // loading
  try {
    const res = await axios.post(`http://localhost:9000/videos2/`, postValue, {
      headers: { "Content-type": "application/json; charset=UTP-8" },
    });
    toast.success("successfully your blog Posted"); // toast notification
    dispatch(blog_post(postValue)); // to redux state
  } catch (error) {
    dispatch(blog_post_error(error));   // error
  }
};

export default PostBlog;
