import { related_fail, related_loaded, related_loading } from "../action";

const relatedBlog =
  ({ tags, id }) =>
  async (dispatch) => {
    // ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
    // ['tags_like=javascript', 'tags_like=react']

    dispatch(related_loading());

    try {
      let queryString =
        tags?.length > 0
          ? tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
          : `id_ne=${id}`;

      const res = await fetch(`${process.env.REACT_APP_MY_API}?${queryString}`);
      const related = await res.json();

      dispatch(related_loaded(related));
    } catch (error) {
      dispatch(related_fail(error));
    }
  };

export default relatedBlog;
