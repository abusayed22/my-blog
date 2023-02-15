import { loaded ,fail,loading} from "../action";

const fetchBlog = ({tags, searched}) =>  async (dispatch, getState) => {

    dispatch(loading())

    try {
        // like query type : ?tags_like=react
        // undefinedtags_like=Javascript
        let queryString;
        if(tags?.length > 0) {
            queryString = tags.map(tag => `tags_like=${tag}`).join("&")
        }

        if(!searched == "") {
            queryString = `q=${searched}`
        }

        const res = await fetch(`http://localhost:9000/videos2?${queryString}`);
        const blogs = await res.json()

        dispatch(loaded(blogs))
    } catch (error) {
        dispatch(fail(error))
    }


}

export default fetchBlog;