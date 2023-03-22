import {
  AUTHOR_BLOG_DELETE,
  AUTHOR_BLOG_DELETE_ERROR,
  AUTHOR_BLOG_DELETE_LOADING,
  AUTHOR_DATA_ERROR,
  AUTHOR_DATA_LOADED,
  AUTHOR_DATA_LOADING,
} from "./actionTypes";

export const author_loaded = (data) => {
  return {
    type: AUTHOR_DATA_LOADED,
    payload: data,
  };
};
export const author_loading = () => {
  return {
    type: AUTHOR_DATA_LOADING,
  };
};
export const author_error = (err) => {
  return {
    type: AUTHOR_DATA_ERROR,
    payload: err,
  };
};

//delete author blog
export const delete_author_Blog = (deleteId) => {
  return {
    type: AUTHOR_BLOG_DELETE,
    payload: deleteId,
  };
};
export const delete_author_Blog_error = (err) => {
  return {
    type: AUTHOR_BLOG_DELETE_ERROR,
    payload: err,
  };
};
export const delete_author_Blog_loading = () => {
  return {
    type: AUTHOR_BLOG_DELETE_LOADING,
  };
};