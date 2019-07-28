import { SEARCH_USERS } from "../actionTypes";

const search = (state = [], action) => {
  switch (action.type) {
    case SEARCH_USERS:
      console.log(action);
      return [...action.query];
    default:
      return state;
  }
};

export default search;
