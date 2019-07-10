import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = configureStore();

//learn this one from https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// store.subscribe(() => {
//   saveState(store.getState());
// });

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  //prevent tampering of jwtToken in localStorage
  try {
    // store.dispatch(setCurrentUser(jwtDecode));
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (error) {
    console.log("here");
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
