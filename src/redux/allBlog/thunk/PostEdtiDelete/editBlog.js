import axios from "axios";
import {
  delete_Blog_error,
  delete_Blog_loading,
  edit_Blog,
} from "../../action";
import { toast } from "react-toastify";

const editBlog = (blogId, updateValue) => async (dispatch) => {
  dispatch(delete_Blog_loading()); // loading
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_MY_API}/${blogId}`,
      updateValue,
      { headers: { "Content-type": "application/json; charset = UTP-8" } }
    );
    dispatch(edit_Blog(blogId, updateValue)); // to redux state
    toast.success("successfully your blog Updated"); // toast notification
  } catch (error) {
    dispatch(delete_Blog_error(error)); // error
  }
};

export default editBlog;
