import axios from "axios";
import { author_error, author_loaded, author_loading } from "../action";

const authorThunk = (email) =>async(dispatch) => {

    dispatch(author_loading())

    try{
        const res = await fetch(`http://localhost:9000/videos2?email=${email}`);
        const authorsData = await res.json();
        dispatch(author_loaded(authorsData))
    } catch (err) {
        author_error(err)
    }

    
}

export default authorThunk;