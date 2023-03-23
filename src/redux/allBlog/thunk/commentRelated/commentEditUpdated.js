// comment thunk here becouse updating thunk with update redux single state
import axios from "axios";
import {
  edit_updated_loading,
  edit_updated,
  edit_updated_error,
} from "../../action";

const commentEditUpdated = (blogId, commentObj) => async (dispatch) => {
  dispatch(edit_updated_loading()); // loading
  const {
    id,
    name,
    title,
    description,
    date,
    duration,
    views,
    Email,
    tags,
    link,
    thumbnail,
    like,
    comments,
  } = commentObj;
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_MY_API}/${blogId}`,
      {
        id,
        name,
        title,
        description,
        date,
        duration,
        views,
        Email,
        tags,
        like,
        thumbnail,
        link,
        comments,
      },
      { headers: { "Content-type": "application/json; charset=UTP-8" } }
    );
    dispatch(edit_updated(commentObj)); // to redux state
  } catch (error) {
    dispatch(edit_updated_error(error)); // for error haldle
  }
};

export default commentEditUpdated;
