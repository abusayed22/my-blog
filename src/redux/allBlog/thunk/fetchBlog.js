import { loaded } from "../action";

const fetchBlog = async (dispatch, getState) => {
    
    const res = await fetch('http//: sldjflsdjhf');
    const blogs = await res.json()

    dispatch(loaded(blogs))

}