import axios from "axios"
import { useEffect } from "react";
// import { toast } from "react-toastify";
import { user_register_done, user_register_loading } from "../actions"


const registerThunk = (userData) => async(dispatch) => {
    dispatch(user_register_loading);

    try {
        const res = await axios.post(`https://auth-server-49u7.onrender.com/api/auth/register`, {
            userData
        });
        const authData = await res.data
        const tokenData = authData.access_token
        
        localStorage.setItem("auth", JSON.stringify({userLoggedIn: true, token: tokenData,user: userData}))
        dispatch(user_register_done({tokenData,userData}))
        // toast.success('successfully register')
    } catch (error) {
        // toast.error("error:" + error)
    }
}
export default registerThunk;