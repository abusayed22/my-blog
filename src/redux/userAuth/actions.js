import { USER_REGISTER_DONE, USER_REGISTER_FAILD, USER_REGISTER_LOADING,USER_LOGIN_DONE } from "./actionType"

export const user_register_done = ({tokenData,userData}) => {
    return {
        type: USER_REGISTER_DONE,
        payload: {tokenData,userData}
    }
}
export const user_loggedIn = ({token,user}) => {
    return {
        type: USER_LOGIN_DONE,
        payload: {token,user}
    }
}
export const user_register_faild = (error) => {
    return {
        type: USER_REGISTER_FAILD,
        payload: error
    }
}
export const user_register_loading = () => {
    return {
        type: USER_REGISTER_LOADING,
    }
}