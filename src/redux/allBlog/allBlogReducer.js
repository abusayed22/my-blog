import { LOADED } from "./actionTypes";

const initialState = [
    {
        id:1,
        author: test,
        image: 'ldlll',
        heading: 'lsdhflsefgj',
        contend: 'lorem12',

    }
]

const allBlogReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOADED:
            return action.payload

        

        return state;
    }
}

export default allBlogReducer;