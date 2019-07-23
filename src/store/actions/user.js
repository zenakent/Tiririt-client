import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { GET_USER, REMOVE_USER_MESSAGE } from "../actionTypes";

export const loadUser = user => ({
  type: GET_USER,
  user
});

export const remove = id => ({
  type: REMOVE_USER_MESSAGE,
  id
});

export const fetchUser = user_id => {
  return dispatch => {
    return apiCall("get", `/api/users/${user_id}`)
      .then(res => {
        dispatch(loadUser(res));
        return res;
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const removeAMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};
