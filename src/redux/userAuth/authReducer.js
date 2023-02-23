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
                    token: action.payload.tokenData,
                    isLoggedIn: null,
                    name: action.payload.userData.name,
                    passward: action.payload.userData.password,
                    email: action.payload.userData.email
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
            return state
    }
}

export default authReducer;