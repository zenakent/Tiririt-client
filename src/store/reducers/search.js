import { SEARCH_USERS } from "../actionTypes";

const search = (state = { search: {} }, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      console.log(action);
      return { search: action.query };
    default:
      return state;
  }
};

export default search;
