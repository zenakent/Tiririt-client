import {
  GET_USER,
  REMOVE_USER_MESSAGE,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING
} from "../actionTypes";

const user = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return { user: action.user };
    case REMOVE_USER_MESSAGE:
      const newList = state.user.messages.filter(
        message => message._id !== action.id
      );
      return {
        user: { ...state.user, messages: [...newList] }
      };
    case ADD_FOLLOWING:
      return {
        user: {
          ...state.user,
          followers: [...state.user.followers, action.currentUserId]
        }
      };
    case REMOVE_FOLLOWING:
      const newFollowersList = state.user.followers.filter(
        follower => follower._id !== action.id
      );
      return { user: { ...state.user, followers: [...newFollowersList] } };
    default:
      return state;
  }
};

export default user;
