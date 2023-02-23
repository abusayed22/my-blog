import axios from "axios"
// import { toast } from "react-toastify";
import { user_register_done, user_register_loading } from "../actions"


const registerThunk = (userData) => async(dispatch) => {
    dispatch(user_register_loading);
    try {
        const res = await axios.post(`https://auth-server-49u7.onrender.com/api/auth/register`, {
            userData
        });
        const authData = await res.data
        console.log(authData);

        dispatch(user_register_done(userData))
        // toast.success('successfully register')
    } catch (error) {
        // toast.error("error:" + error)
    }
}
export default registerThunk;