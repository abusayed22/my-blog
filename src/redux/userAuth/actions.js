import {
  USER_REGISTER_DONE,
  USER_REGISTER_FAILD,
  USER_REGISTER_LOADING,
  USER_LOGOUT,
  USER_PERSIST_FETCHING,
} from "./actionType";

export const user_register_done = (tokenData, userData) => {
  return {
    type: USER_REGISTER_DONE,
    payload: tokenData,
    userData,
  };
};
export const user_persist_fetching = (token, user) => {
  return {
    type: USER_PERSIST_FETCHING,
    payload: token,
    user,
  };
};
export const user_register_faild = (error) => {
  return {
    type: USER_REGISTER_FAILD,
    payload: error,
  };
};
export const user_register_loading = () => {
  return {
    type: USER_REGISTER_LOADING,
  };
};

// logout
export const user_logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
