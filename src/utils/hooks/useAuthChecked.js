import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { change_refetch, user_loggedIn, user_persist_fetching, user_register_done } from "../../redux/userAuth/actions";

export const useAuthChecked = () => {
    const { user, refetch } = useSelector(state => state.user)
    // console.log(user)
    const [authChecked, setAuthChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageAuth = localStorage?.getItem("auth");

        if (localStorageAuth) {

            const auth = JSON.parse(localStorageAuth);
            const token = auth.token
            const user = auth.user
            if (token && user) {
                dispatch(user_persist_fetching({ token, user }));
                setAuthChecked(true)
            } else {
                setAuthChecked(false)
            }

        }

        if (user?.token && user?.email) {
            return setAuthChecked(true)
        } else {
            return setAuthChecked(false)
        }

    }, [dispatch, setAuthChecked, user?.token, user?.email]);

    return authChecked;
}