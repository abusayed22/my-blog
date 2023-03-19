// comment thunk here becouse updating thunk with update redux single state
import axios from "axios";
import {
  delete_Blog_error,
  delete_Blog_loading,
  delete_Blog,
  edit_Blog,
} from "../../action";
import { toast } from "react-toastify";

const editBlog = (blogId, updateValue) => async (dispatch) => {
  dispatch(delete_Blog_loading());
  try {
    // const { id,name, title, description,  date, duration, views,Email, tags, link, thumbnail, like, comments } = updateValue;
    const res = await axios.put(
      `http://localhost:9000/videos2/${blogId}`,
      updateValue,
      { headers: { "Content-type": "application/json; charset = UTP-8" } }
    );
    dispatch(edit_Blog(blogId, updateValue));
    toast.success("successfully your blog Updated");
  } catch (error) {
    dispatch(delete_Blog_error(error));
  }
};

export default editBlog;
