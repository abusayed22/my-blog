import { COMMENT_POST, LOADED, SINGLE_LOADED, FAILD, LOADING, SINGLE_LOADING, SINGLE_FAILD, RELATED_FAILD, RELATED_LOADED, RELATED_LOADING, COMMENT_POST_ERROR, COMMENT_LOADING, LIKED, LIKED_ERROR, LIKED_LOADING, DELETE_COMMENT, EDIT_UPDATED, EDIT_UPDATED_LOADING, EDIT_UPDATED_ERROR, BLOG_POST, BLOG_POST_ERROR, BLOG_LOADING, BLOG_DELETE, BLOG_DELETE_ERROR, BLOG_DELETE_LOADING, BLOG_EDIT, BLOG_EDIT_ERROR, BLOG_EDIT_LOADING } from "./actionTypes";
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

        // comment edit updated
        case EDIT_UPDATED:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: action.payload,
                    isLoading: false,
                    isError: null
                }
            }
        case EDIT_UPDATED_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }
        case EDIT_UPDATED_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
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

            // blog post
        case BLOG_POST:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [
                        ...state.blogs,
                        action.payload
                    ],
                    isLoading: false,
                    isError: null
                }
            }
        case BLOG_POST_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }
        case BLOG_LOADING:
            return {
                ...state,
                // blog: {
                //     ...state.blog,
                //     blog: {},
                //     isLoading: true,
                //     isError: null
                // }
            }

                        // blog delete
        case BLOG_DELETE:
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [
                        ...state.blogs.filter(blog => {
                            return blog.id !== action.payload
                        })
                    ],
                    isLoading: false,
                    isError: null
                }
            }
        case BLOG_DELETE_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }
        case BLOG_DELETE_LOADING:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: true,
                    isError: null
                }
            }

                        // blog delete
        case BLOG_EDIT:
            const {blogId,editValue} = action.payload
            return {
                ...state,
                blogs: {
                    ...state.blogs,
                    blogs: [
                        ...state.blogs.map(blog => {
                            if(blog.id === blogId) {
                                return blog = editValue
                            }
                        })
                    ],
                    isLoading: false,
                    isError: null
                }
            }
        case BLOG_EDIT_ERROR:
            return {
                ...state,
                blog: {
                    ...state.blog,
                    blog: {},
                    isLoading: false,
                    isError: action.payload
                }
            }
        case BLOG_EDIT_LOADING:
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