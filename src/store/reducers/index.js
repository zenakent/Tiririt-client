import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import user from "./user";
import search from "./search";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  user,
  search
});

export default rootReducer;
