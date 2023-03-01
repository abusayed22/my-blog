// like thunk here becouse updating thunk with update redux single state 
import axios from "axios";
import { single_loading, single_loaded, single_error, post_comment, post_comment_error, post_comment_loading } from "../../action";


const commentPost = ({ id:blogId, commentObj ,}) => async (dispatch) => {

    dispatch(post_comment_loading());
    const { id, title, description, author, date, duration, views, tags, link, thumbnail, like, comments } = commentObj;
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

        
        dispatch(post_comment(commentObj))


    } catch (error) {
        dispatch(post_comment_error(error));
    }
}

export default commentPost;
