import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { GET_RANDOM_USERS } from "../actionTypes";

export const load3RandomUsers = randomUsers => ({
  type: GET_RANDOM_USERS,
  randomUsers
});

export const fetchRandomUsers = () => {
  return dispatch => {
    return apiCall("get", `/api/users/get3RandomUsers`)
      .then(res => {
        dispatch(load3RandomUsers(res));
        return res;
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};
