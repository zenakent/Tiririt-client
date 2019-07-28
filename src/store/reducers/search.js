import { SEARCH_USERS } from "../actionTypes";

const search = (state = { search: {} }, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { search: action.query };
    default:
      return state;
  }
};

export default search;
