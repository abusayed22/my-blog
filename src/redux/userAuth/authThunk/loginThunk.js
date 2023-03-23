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
  // ${process.env.REACT_APP_MY_API}
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_AUTH_LOGIN}`,
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
