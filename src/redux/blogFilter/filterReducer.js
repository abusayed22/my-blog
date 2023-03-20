import { TAG_SELECT, TAG_REMOVED, SEARCH } from "./actionTypes";

const initialState = {
  tags: [],
  search: null,
};

const filterReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TAG_SELECT:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };

    case TAG_REMOVED:
      return {
        ...state,
        tags: state.tags.filter((item) => item !== action.payload),
      };

    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
  }
  return state;
};

export default filterReducer;
