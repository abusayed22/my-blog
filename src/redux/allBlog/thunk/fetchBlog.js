import { loaded ,fail,loading} from "../action";


const fetchBlog = ({tags, searched}) =>  async (dispatch) => {

    dispatch(loading());    // loading

    try {
        let queryString;
        if(tags?.length > 0) {
            queryString = tags.map(tag => `tags_like=${tag}`).join("&");
        }

        if(!searched == "") {
            queryString = `q=${searched}`
        }
        const res = await fetch(`${process.env.REACT_APP_MY_API}?${queryString}`);
        const blogs = await res.json();

        dispatch(loaded(blogs)) //to redux state
    } catch (error) {
        dispatch(fail(error.message))   // error
    };


}

export default fetchBlog;