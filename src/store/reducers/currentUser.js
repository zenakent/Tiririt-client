import {
  SET_CURRENT_USER,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING
} from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //true when logged in
  user: {} //all user infro when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length, //if empty = false, if there are keys = true
        user: action.user
      };
    case ADD_FOLLOWING:
      return {
        isAuthenticated: { ...state.isAuthenticated },
        user: {
          ...state.user,
          following: [...state.user.following, action.foundUserId]
        }
      };
    case REMOVE_FOLLOWING:
      const newFollowingList = state.user.following.filter(
        following => following !== action.foundUserId
      );

      return {
        isAuthenticated: { ...state.isAuthenticated },
        user: {
          ...state.user,
          following: [...newFollowingList]
        }
      };
    default:
      return state;
  }
};
