//responsible for routing logic
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import UserProfile from "../components/UserProfile";
import MessageForm from "../containers/MessageForm";
import SearchResults from "../components/SearchResults";
import { authUser } from "../store/actions/auth";

import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";

class Main extends Component {
  render() {
    const { authUser, errors, removeError, currentUser, messages } = this.props;

    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Homepage
                {...props}
                currentUser={currentUser}
                messages={messages}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props => {
              return (
                <AuthForm
                  {...props}
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  buttonText="Log in"
                  heading="Welcome Back."
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return (
                <AuthForm
                  {...props}
                  signUp
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  buttonText="Sign me up!"
                  heading="Join Tiririt Today!"
                />
              );
            }}
          />
          <Route
            exact
            path="/users/searchUsers"
            render={props => {
              return <SearchResults {...props} currentUser={currentUser} />;
            }}
          />
          <Route
            exact
            path="/users/:id"
            render={props => {
              return <UserProfile {...props} currentUser={currentUser} />;
            }}
          />
          <Route
            exact
            path="/users/:id/following"
            render={props => {
              return (
                <UserProfile
                  {...props}
                  followingPage
                  currentUser={currentUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:id/followers"
            render={props => {
              return (
                <UserProfile
                  {...props}
                  followersPage
                  currentUser={currentUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:currentUserId/messages/new"
            component={withAuth(MessageForm)}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    messages: state.messages
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
