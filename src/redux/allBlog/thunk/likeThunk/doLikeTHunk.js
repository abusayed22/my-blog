// like thunk here becouse updating thunk with update redux single state
import axios from "axios";
import { liked, liked_error, liked_loading } from "../../action";

const doLikeThunk = (blogId, likedObject) => async (dispatch) => {
  dispatch(liked_loading()); // loading
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
  } = likedObject;
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_MY_API}/${blogId}`,
      {
        id,
        title,
        description,
        Email,
        name,
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
    dispatch(liked(likedObject)); // to redux state
  } catch (error) {
    dispatch(liked_error(error)); // error
  }
};

export default doLikeThunk;
