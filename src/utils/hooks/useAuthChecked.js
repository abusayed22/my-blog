import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { json } from "react-router-dom";
import { user_loggedIn, user_register_done } from "../../redux/userAuth/actions";

export const useAuthChecked = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageAuth = localStorage?.getItem("auth");

        if (localStorageAuth) {

            const auth = JSON.parse(localStorageAuth);

            const token = auth.token
            const user = auth.user

            if (token && user) {
                dispatch(user_loggedIn({ token, user }));
                setAuthChecked(true)
            }
        }
    }, [dispatch]);

    return authChecked;
}