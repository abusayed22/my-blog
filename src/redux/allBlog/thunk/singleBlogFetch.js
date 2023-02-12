import { wait } from "@testing-library/user-event/dist/utils";
import { single_loaded, single_error, single_loading } from "../action";

// const singleBlogFetch = (blogId) => {
    
//     return async(dispatch) => {
        
//         dispatch(single_loading())
//         try {
//             const res = await fetch(`http://localhost:9000/videos2/${blogId}`);
    
//             const singleBlog = await res.json();
//             console.log(singleBlog)
//             dispatch(single_loaded(singleBlog));

//         } catch (error) {
//             dispatch(single_error(error))
//         }
//     }
// }

const singleBlogFetch = id => async (dispatch) => {
    dispatch(single_loading());

    const res = await fetch(`http://localhost:9000/videos2/${id}`);
    const singleData = await res.json();
    dispatch(single_loaded(singleData))
}

export default singleBlogFetch;


