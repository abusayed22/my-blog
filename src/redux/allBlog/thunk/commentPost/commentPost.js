import axios from "axios";
import { single_loading, single_loaded, single_error, post_comment } from "../../action";


const commentPost = ({ id:blogId, commentObj ,}) => async (dispatch) => {

    // dispatch(single_loading());
    const { id, title, description, author, date, duration, views, tags, link, thumbnail, like, comments } = commentObj;
    try {
        const res = await axios.put(`http://localhost:9000/videos2/${blogId}`, {
            id, 
            title, 
            description, 
            author, 
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
        dispatch(post_comment(commentObj))


    } catch (error) {
        dispatch(single_error(error));
    }
}

export default commentPost;

// export default axios.create({
//     baseURL: "http://localhost:9000/videos2"
// })