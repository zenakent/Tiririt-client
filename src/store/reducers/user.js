import { GET_USER } from "../actionTypes";

const user = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return { user: action.user };
    default:
      return state;
  }
};

export default user;
