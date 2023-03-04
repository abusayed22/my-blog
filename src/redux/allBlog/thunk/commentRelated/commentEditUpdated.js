// comment thunk here becouse updating thunk with update redux single state 
import axios from "axios";
import {edit_updated_loading, edit_updated, edit_updated_error } from "../../action";


const commentEditUpdated = (blogId, commentObj ) => async (dispatch) => {

    dispatch(edit_updated_loading());
    const { id,name, title, description,  date, duration, views,Email, tags, link, thumbnail, like, comments } = commentObj;
    try {
        const res = await axios.put(`http://localhost:9000/videos2/${blogId}`, {
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
            comments
        },
            { headers: { "Content-type": "application/json; charset=UTP-8" } });

        
        dispatch(edit_updated(commentObj))


    } catch (error) {
        dispatch(edit_updated_error(error));
    }
}

export default commentEditUpdated;
