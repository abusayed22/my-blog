// like thunk here becouse updating thunk with update redux single state
import axios from "axios";
import { liked, liked_error, liked_loading } from "../../action";

const doLikeThunk = (blogId,likedObject) => async(dispatch) => {
    dispatch(liked_loading());
    const {id,name, title, description,  date, duration, views,Email, tags, link, thumbnail, like, comments} = likedObject;
    try {
        const res = await axios.put(`http://localhost:9000/videos2/${blogId}`, {
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
            comments
        },
            { headers: { "Content-type": "application/json; charset=UTP-8" } });
        dispatch(liked(likedObject))
    } catch (error) {
        dispatch(liked_error(error));
    }
}

export default doLikeThunk;
