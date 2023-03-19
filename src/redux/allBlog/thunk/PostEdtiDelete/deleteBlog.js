// comment thunk here becouse updating thunk with update redux single state 
import axios from "axios";
import { delete_Blog_error,delete_Blog_loading, delete_Blog } from "../../action";
import { toast } from "react-toastify";


const deleteBlog = ( deleteId ) => async (dispatch) => {

    dispatch(delete_Blog_loading());
    try {
        const res = await axios.delete(`http://localhost:9000/videos2/${deleteId}`,
            { headers: { "Content-type": "application/json; charset=UTP-8" } });
        dispatch(delete_Blog(deleteId));
        toast.success('successfully your blog Deleted')
    } catch (error) {
        dispatch(delete_Blog_error(error));
    }
}

export default deleteBlog;
