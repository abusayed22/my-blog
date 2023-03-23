import { single_loaded, single_error, single_loading } from "../action";

const singleBlogFetch = (blogId) => {

    return async (dispatch) => {

        dispatch(single_loading())
        try {
            const res = await fetch(`${process.env.REACT_APP_MY_API}/${blogId}`);

            const singleBlog = await res.json();
            dispatch(single_loaded(singleBlog));

        } catch (error) {
            dispatch(single_error(error))
        }
    }
}


export default singleBlogFetch;


