import { GET_RANDOM_USERS } from "../actionTypes";

const randomUsers = (state = [], action) => {
  switch (action.type) {
    case GET_RANDOM_USERS:
      return [...action.randomUsers];
    default:
      return state;
  }
};

export default randomUsers;
