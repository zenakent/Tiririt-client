import React, { Component } from "react";
import UserAside from "./UserAside";
import SearchCard from "./SearchCard";

import { connect } from "react-redux";
import { searchUser } from "../store/actions/search";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const {
      id,
      profileImageUrl,
      followers,
      following,
      username,
      messages
    } = this.props.currentUser;

    console.log(this.props.search);
    let searchCard = this.props.search.map(r => (
      <SearchCard
        profileImageUrl={r.profileImageUrl}
        messages={r.messages}
        followers={r.followers}
        following={r.following}
        username={r.username}
        userId={r._id}
        key={r._id}
      />
    ));

    return (
      <div className="row flex-column flex-md-row justify-content-center mt-3">
        <div className="col-sm-12 col-md-5 col-lg-4 order-sm-1 mb-sm-3 mb-3">
          <UserAside
            userId={id}
            followersCount={followers.length}
            followingCount={following.length}
            profileImageUrl={profileImageUrl}
            username={username}
            messagesCount={messages.length}
          />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 order-sm-2">
          {searchCard}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    currentUser: state.currentUser.user,
    search: state.search
  };
}

export default connect(
  mapStateToProps,
  { searchUser }
)(SearchResults);
