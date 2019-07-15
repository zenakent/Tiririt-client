import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

class Homepage extends Component {
  render() {
    let { currentUser, messages } = this.props;
    let messagesCount = 0;
    messages.forEach(m => {
      if (currentUser.user.id === m.user._id) {
        messagesCount += 1;
      }
      return messagesCount;
    });

    if (!this.props.currentUser.isAuthenticated) {
      return (
        <div className="home-hero">
          <h1>What's Happening</h1>
          <h4>New to Tiririt?</h4>
          <Link to="/signup" className="btn btn-primary">
            Sign up here
          </Link>
        </div>
      );
    }

    return (
      <div>
        <MessageTimeline
          followersCount={this.props.currentUser.user.followers.length}
          followingCount={this.props.currentUser.user.following.length}
          messagesCount={messagesCount}
          profileImageUrl={this.props.currentUser.user.profileImageUrl}
          username={this.props.currentUser.user.username}
          followers={this.props.currentUser}
        />
      </div>
    );
  }
}

export default Homepage;
