import axios from "axios";
import { single_loading, single_loaded, single_error, post_comment } from "../../action";


const commentPost = ({ id, commentObj }) => async (dispatch) => {
    // dispatch(single_loading());
    const {com,date}= commentObj;
    // try {
    //     const { com, date } = commentObj || {};
    //     const res = await axios.patch(`http://localhost:9000/videos2/${id}`, {
    //         comments: { com, date }
    //     },
    //         { headers: { "Content-type": "application/json; charset=UTP-8" } });

    //     // const updatedData = await res.data()
    //     // console.log(updatedData);
    //     dispatch(post_comment({com,date} ))
       

    // } catch (error) {
    //     dispatch(single_error(error));
    // }
    dispatch(post_comment({com,date} ))
    console.log('done');
}

export default commentPost;