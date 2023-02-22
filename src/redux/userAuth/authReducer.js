import { USER_REGISTER_DONE, USER_REGISTER_FAILD, USER_REGISTER_LOADING } from "./actionType";

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
                    token: action.payload.token,
                    isLoggedIn: action.payload.isLoggedIn,
                    name: action.payload.name,
                    passward: action.payload.passward,
                    email: action.payload.email
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

        default:
            break;
    }
}

export default authReducer;