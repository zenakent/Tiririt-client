import React, { Component } from "react";
import UserAside from "./UserAside";

import { connect } from "react-redux";
import { searchUser } from "../store/actions/search";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("heello");
    console.log(this.props.currentUser);
    const {
      id,
      profileImageUrl,
      followers,
      following,
      username
    } = this.props.currentUser;

    if (id === undefined) {
      return <div />;
    }
    return (
      <div className="row flex-column flex-md-row justify-content-center mt-3">
        <div className="col-sm-12 col-md-5 col-lg-4 order-sm-1 mb-sm-3 mb-3">
          <UserAside
            userId={id}
            followersCount={followers.length}
            followingCount={following.length}
            profileImageUrl={profileImageUrl}
            username={username}
            // messagesCount={this.props.messagesCount}
          />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 order-sm-2" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user
  };
}

export default connect(
  mapStateToProps,
  { searchUser }
)(SearchResults);
