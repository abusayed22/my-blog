import { single_loaded } from "../action";

const singleBlogFetch = blogId =>  async (dispatch) => {
    const res = await fetch (`http://localhost:9000/videos2/${blogId}`);

    const singleBlog = await res.json();
    dispatch(single_loaded(singleBlog))
}

export default singleBlogFetch;
