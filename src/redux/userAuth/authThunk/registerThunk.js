import axios from "axios";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import { user_register_done, user_register_loading } from "../actions";

const registerThunk = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(user_register_loading);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_AUTH_REGISTER}`,
      {
        userData,
      }
    );
    const authData = await res.data;
    const tokenData = authData.access_token;

    localStorage.setItem(
      "auth",
      JSON.stringify({ userLoggedIn: true, token: tokenData, user: userData })
    );
    dispatch(user_register_done({ tokenData, userData }));
    toast.success("successfully register");
  } catch (error) {
    // toast.error("error:" + error)
  }
};
export default registerThunk;
