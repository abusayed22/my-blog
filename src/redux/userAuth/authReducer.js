import { USER_LOGIN_DONE, USER_LOGOUT, USER_REGISTER_DONE, USER_REGISTER_FAILD, USER_REGISTER_LOADING } from "./actionType";

const initialState = {
    user: {},
    isLoading: false,
    isError: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_DONE:
            return {
                ...state,
                user: {
                    token: action.payload.tokenData,
                    isLoggedIn: null,
                    name: action.payload.userData?.name,
                    passward: action.payload.userData?.password,
                    email: action.payload.userData?.email
                }
            }
        case USER_LOGIN_DONE:
            return {
                ...state,
                user: {
                    token: action.payload.token,
                    isLoggedIn: true,
                    name: action.payload.user?.name,
                    passward: action.payload.userData?.password,
                    email: action.payload.userData?.email
                }
            }

        case USER_REGISTER_FAILD:
            return {
                ...state,
                user: {},
                isLoading: false,
                isError: action.payload
            }

        case USER_REGISTER_LOADING:
            return {
                ...state,
                user: {},
                isLoading: true,
                isError: false
            }

        // logout
        case USER_LOGOUT:
            return {
                user: {},
                isLoading: false,
                isError: false
            }

        default:
            return state
    }
}

export default authReducer;