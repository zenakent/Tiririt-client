import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { SEARCH_USERS } from "../actionTypes";

export const getSearch = query => ({
  type: SEARCH_USERS,
  query
});

export const searchUser = query => {
  return dispatch => {
    return apiCall("get"`/api/users/searchUsers`)
      .then(res => {
        dispatch(getSearch(query));
        return res;
      })
      .catch(err => {
        addError(err.message);
      });
  };
};
