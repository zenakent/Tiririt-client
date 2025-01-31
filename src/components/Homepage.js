import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

class Homepage extends Component {
  render() {
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
        <MessageTimeline />
      </div>
    );
  }
}

export default Homepage;
