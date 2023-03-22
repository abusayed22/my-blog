import axios from "axios";
import {
  delete_Blog_error,
  delete_Blog_loading,
  delete_Blog,
} from "../../action";
import { toast } from "react-toastify";
import { delete_author_Blog, delete_author_Blog_error, delete_author_Blog_loading } from "../../../authorRelated/action";

const deleteBlog = (deleteId) => async (dispatch) => {
  dispatch(delete_Blog_loading());  // laoding
  dispatch(delete_author_Blog_loading());  // laoding
  try {
    const res = await axios.delete(
      `http://localhost:9000/videos2/${deleteId}`,
      { headers: { "Content-type": "application/json; charset=UTP-8" } }
    );
    dispatch(delete_Blog(deleteId));    // redux state
    dispatch(delete_author_Blog(deleteId));   // redux state
    toast.success("successfully your blog Deleted");
  } catch (error) {
    dispatch(delete_Blog_error(error)); // error
    dispatch(delete_author_Blog_error(error)); // error
  }
};

export default deleteBlog;
