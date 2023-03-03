import { COMMENT_POST, LOADED, SINGLE_LOADED, FAILD, LOADING, SINGLE_LOADING, SINGLE_FAILD, RELATED_FAILD, RELATED_LOADED, RELATED_LOADING, COMMENT_POST_ERROR, COMMENT_LOADING, LIKED, LIKED_ERROR, LIKED_LOADING, DELETE_COMMENT } from "./actionTypes";
import { produce } from "immer"
import { Castle } from "@mui/icons-material";


const initialState = {
    blogs: {
        blogs: [],
        isLoadindg: false,
        isError: null
    },
    blog: {
        blog: {},
        isLoading: false,
        isError: null
    },
    related: {
        blogs: [],
        isLoading: false,
        isError: null
    }
}

const allBlogReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case LOADED:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: action.payload,
                    isLoadindg: false,
                    isError: null
                }
            }
        case LOADING:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: true,
                    isError: null
                }
            }
        case FAILD:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: false,
                    isError: action.payload
                }
            }
        // TODO: is not working in immer way
        // return produce(state.blogs,(draftState) => {
        //     draftState.blogs = action.payload;
        //     draftState.isLoadindg = false;
        //     draftState.isError = false;
        // })


        //single fetch opparations
        case SINGLE_LOADED:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }
        case SINGLE_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }
        case SINGLE_FAILD:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }

        // related blogs operation
        case RELATED_LOADED:
            return {
                ...state,
                related: {
                    ...state.blogs,
                    blogs: action.payload,
                    isLoadindg: false,
                    isError: null
                }
            }
        case RELATED_LOADING:
            return {
                ...state,
                related: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: true,
                    isError: null
                }
            }
        case RELATED_FAILD:
            return {
                ...state,
                related: {
                    ...state.blogs,
                    blogs: [],
                    isLoadindg: false,
                    isError: action.payload
                }
            }
        //  comments
        //COMMENT POST
        case COMMENT_POST:  
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }
        case COMMENT_POST_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }
        case COMMENT_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }
        // COMMENT DELETED
        case DELETE_COMMENT:  
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }
        // case COMMENT_POST_ERROR:
        //     return {
        //         ...state,
        //         blog: {
        //             ...state.blog,
        //             blog: {},
        //             isLoading: false,
        //             isError: action.payload
        //         }
        //     }
        // case COMMENT_LOADING:
        //     return {
        //         ...state,
        //         blog: {
        //             ...state.blog,
        //             blog: {},
        //             isLoading: true,
        //             isError: null
        //         }
        //     }

        //    like
        case LIKED:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }

        case LIKED_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }
        case LIKED_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }
    }
            return state;
}

    export default allBlogReducer;

// {
//     "title": "যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন",
//     "description": "আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।",
//     "author": "LWS",
//     "link": "https://www.youtube-nocookie.com/embed/6O4s7v28nlw",
//     "thumbnail": "https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg",
//     "like": [
//     9
//     ],
//     "comments": {
//     "com": "Insa-Allha",
//     "date": 1676875396718
//     },
//     "date": "May 10, 2022",
//     "duration": "10:12",
//     "views": "2.1K",
//     "tags": [
//     "begainer",
//     "react"
//     ],
//     "id": 8
//     }