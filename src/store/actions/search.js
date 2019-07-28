import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { SEARCH_USERS } from "../actionTypes";

export const getSearch = query => ({
  type: SEARCH_USERS,
  query
});

export const searchUser = query => {
  return dispatch => {
    return apiCall("get", `/api/users/searchUsers?search=${query}`)
      .then(res => {
        dispatch(getSearch(res));

        return res;
      })
      .catch(err => {
        addError(err.message);
      });
  };
};
