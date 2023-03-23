import axios from "axios";
import {
  delete_Blog_error,
  delete_Blog_loading,
  delete_Blog,
} from "../../action";
import { toast } from "react-toastify";
import { delete_author_Blog, delete_author_Blog_error, delete_author_Blog_loading } from "../../../authorRelated/action";

const deleteBlog = (deleteId) => async (dispatch) => {
  // dispatch(delete_author_Blog_loading());  // laoding
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_MY_API}/${deleteId}`,
      { headers: { "Content-type": "application/json; charset=UTP-8" } }
    );
    dispatch(delete_Blog(deleteId));    // all blogs redux state 
    dispatch(delete_author_Blog(deleteId));  // author redux state  
    toast.success("successfully your Blog Deleted");
  } catch (error) {
    dispatch(delete_Blog_error(error)); // error
    dispatch(delete_author_Blog_error(error)); // error
  }
};

export default deleteBlog;
