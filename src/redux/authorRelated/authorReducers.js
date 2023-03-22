import {
  AUTHOR_BLOG_DELETE,
  AUTHOR_BLOG_DELETE_ERROR,
  AUTHOR_BLOG_DELETE_LOADING,
  AUTHOR_DATA_ERROR,
  AUTHOR_DATA_LOADED,
  AUTHOR_DATA_LOADING,
} from "./actionTypes";

const initialState = {
  authorOf: [],
  isLoading: false,
  isError: null,
};
const authorReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHOR_DATA_LOADED:
      return {
        ...state,
        authorOf: action.payload,
        isLoading: false,
        isError: null,
      };

    case AUTHOR_DATA_LOADING:
      return {
        ...state,
        authorOf: [],
        isLoading: true,
        isError: null,
      };
    case AUTHOR_DATA_ERROR:
      return {
        ...state,
        authorOf: [],
        isLoading: false,
        isError: action.payload,
      };

      // ======== author blog delete
    case AUTHOR_BLOG_DELETE:
      return {
        ...state,
        authorOf: state.authorOf.filter(blog => blog.id !== action.payload),
        isLoading: false,
        isError: null,
      };
    case AUTHOR_BLOG_DELETE_ERROR:
      return {
        ...state,
        authorOf: [],
        isLoading: false,
        isError: action.payload,
      };
    case AUTHOR_BLOG_DELETE_LOADING:
      return {
        ...state,
        authorOf: [],
        isLoading: true,
        isError: null,
      };

    default:
      return state;
  }
};

export default authorReducers;
