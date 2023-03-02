// like thunk here becouse updating thunk with update redux single state

import axios from "axios";
import { liked, liked_error, liked_loading, post_comment, } from "../../action";

const doLikeThunk = (blogId,likedObject) => async(dispatch) => {
    dispatch(liked_loading());
    const { id, title, description, author, date, duration, views, tags, link, thumbnail, like, comments } = likedObject;
    try {
        
        const res = await axios.put(`http://localhost:9000/videos2/${blogId}`, {
            id, 
            title, 
            description, 
            author, 
            date,
            duration, 
            views, 
            tags, 
            like, 
            thumbnail, 
            link, 
            comments
        },
            { headers: { "Content-type": "application/json; charset=UTP-8" } });

        // const updatedData = await res.data()
        // console.log(updatedData);
        dispatch(liked(likedObject))


    } catch (error) {
        dispatch(liked_error(error));
    }
}

export default doLikeThunk;
