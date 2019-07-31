import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import user from "./user";
import search from "./search";
import getRandomUser from "./getRandomUser";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  user,
  search,
  getRandomUser
});

export default rootReducer;
