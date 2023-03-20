// comment thunk here becouse updating thunk with update redux single state
import axios from "axios";
import {
  deleted_comment_loading,
  deleted_comment,
  deleted_comment_error,
} from "../../action";

const commentDelete = (id, commentObj) => async (dispatch) => {
  dispatch(deleted_comment_loading()); // for doading
  const {
    id,
    title,
    description,
    name,
    Email,
    professional,
    proTitle,
    date,
    duration,
    views,
    tags,
    link,
    thumbnail,
    like,
    comments,
  } = commentObj || {};
  try {
    const res = await axios.put(
      `http://localhost:9000/videos2/${id}`,
      {
        id,
        title,
        description,
        name,
        Email,
        professional,
        proTitle,
        date,
        duration,
        views,
        tags,
        like,
        thumbnail,
        link,
        comments,
      },
      { headers: { "Content-type": "application/json; charset=UTP-8" } }
    );
    dispatch(deleted_comment(commentObj)); // to redux state
  } catch (error) {
    dispatch(deleted_comment_error(error)); // for error haldle
  }
};

export default commentDelete;
