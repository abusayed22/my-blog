import axios from "axios";
import { SINGLE_LOADING } from "../../actionTypes"
import {single_loading,single_loaded,single_error, post_comment} from "../../action";


const commentPost = ({ id, comment }) => async (dispatch) => {
    dispatch(single_loading());
        // try {
            const res = await fetch(`http://localhost:9000/videos2/${id}`,{
                method: "PATCH",
                body: JSON.stringify({
                    comments: comment 
                }),
                headers: {
                    "Content-type": "application/json; charset= UTF-8"
                }
            })
            const postComment = await res.json();
            // console.log(comment);
        // dispatch(post_comment(postComment.comments))
    // } catch (error) {
        // dispatch(single_error(error));
    // }
}

export default commentPost;