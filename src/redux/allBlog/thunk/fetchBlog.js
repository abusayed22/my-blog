import { loaded ,fail,loading} from "../action";

const fetchBlog = async (dispatch, getState) => {

    dispatch(loading())

    try {
        const res = await fetch('http://localhost:9000/videos2/');
        const blogs = await res.json()

        dispatch(loaded(blogs))
    } catch (error) {
        dispatch(fail(error))
    }


}

export default fetchBlog;