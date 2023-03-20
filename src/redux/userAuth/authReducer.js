import {
  USER_LOGOUT,
  USER_REGISTER_DONE,
  USER_REGISTER_FAILD,
  USER_REGISTER_LOADING,
  USER_PERSIST_FETCHING,
} from "./actionType";

const initialState = {
  user: {},
  isLoading: false,
  isError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_DONE:
      return {
        ...state,
        user: {
          token: action.payload.tokenData,
          isLoggedIn: true,
          passward: action.payload.userData?.password,
          email: action.payload.userData?.email,
        },
      };
    case USER_PERSIST_FETCHING:
      return {
        ...state,
        user: {
          token: action.payload.token,
          isLoggedIn: true,
          passward: action.payload.user?.password,
          email: action.payload.user?.email,
        },
      };

    case USER_REGISTER_FAILD:
      return {
        ...state,
        user: {},
        isLoading: false,
        isError: action.payload.error,
      };

    case USER_REGISTER_LOADING:
      return {
        ...state,
        user: {},
        isLoading: true,
        isError: false,
      };

    // logout
    case USER_LOGOUT:
      return {
        user: {},
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default authReducer;
