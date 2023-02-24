import axios from "axios"
// import { toast } from "react-toastify";
import { user_register_done, user_register_loading } from "../actions"


const loginThunk = (userData) => async(dispatch) => {
    dispatch(user_register_loading);
    const {email, password} = userData;
    try {
        const res = await axios.post(`https://auth-server-49u7.onrender.com/api/auth/login`, {
            email, password
        });
        const authData = await res.data
        // const tokenData = authData.access_token
        console.log(authData);
        console.log(authData);
        // localStorage.setItem("LOGIN", JSON.stringify({userLoggedIn: true, token: tokenData}))
        // dispatch(user_register_done({tokenData,userData}))
        // toast.success('successfully register')
    } catch (error) {
        // toast.error("error:" + error)
    }
}
export default loginThunk;