import axios from "axios";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import {
  user_register_done,
  user_register_faild,
  user_register_loading,
} from "../actions";

const loginThunk = (userData) => async (dispatch) => {
  dispatch(user_register_loading());
  const { email, password } = userData;

  try {
    const res = await axios.post(
      `https://auth-server-49u7.onrender.com/api/auth/login`,
      {
        email,
        password,
      }
    );
    const authData = await res.data;
    const tokenData = authData.access_token;

    localStorage.setItem(
      "auth",
      JSON.stringify({ userLoggedIn: true, token: tokenData, user: userData })
    );
    dispatch(user_register_done({ tokenData, userData }));

    toast.success("successfully Login");
  } catch (error) {
    dispatch(user_register_faild(error.message));

    toast.error("error:" + error);
  }
};
export default loginThunk;
