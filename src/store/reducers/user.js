import { GET_USER, REMOVE_USER_MESSAGE } from "../actionTypes";

const user = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(state);
      console.log(action);
      return { user: action.user, messages: action.user.messages };
    case REMOVE_USER_MESSAGE:
      console.log(state.user);
      console.log(action);
      const newList = state.user.messages.filter(
        message => message._id !== action.id
      );
      console.log(newList);
      return {
        user: { ...state.user, messages: [...newList] }
      };
    default:
      return state;
  }
};

export default user;
