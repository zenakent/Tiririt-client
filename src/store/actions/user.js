import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { GET_USER } from "../actionTypes";

export const loadUser = user => ({
  type: GET_USER,
  user
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
