import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchUser,
  removeAMessage,
  postAddFollowing,
  removeAFollowing,
  fetchFollowing,
  fetchFollowers
} from "../store/actions/user";
// import { postAddFollowing } from "../store/actions/following";

import DefaultProfileImg from "../images/default-profile-image.jpg";

import MessageItem from "./MessageItem";
import SearchCard from "./SearchCard";
import "../css/UserProfile.css";

class UserProfile extends Component {
  async componentDidMount() {
    const userId = this.props.match.params.id;

    // await this.props.fetchUser(userId);
    if (this.props.followingPage) {
      await this.props.fetchFollowing(userId);
    } else if (this.props.followersPage) {
      await this.props.fetchFollowers(userId);
    } else {
      await this.props.fetchUser(userId);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      const userId = this.props.match.params.id;
      if (this.props.followingPage) {
        await this.props.fetchFollowing(userId);
      } else if (this.props.followersPage) {
        await this.props.fetchFollowers(userId);
      } else {
        await this.props.fetchUser(userId);
      }
    }
  }

  render() {
    const {
      profileImageUrl,
      profileBannerUrl,
      username,
      messages,
      following,
      followers
    } = this.props.foundUser;

    if (messages === undefined) {
      return <div />;
    }
    let followButton;

    if (this.props.foundUser._id === this.props.currentUser) {
      followButton = <button className="Edit-Profile">Edit Profile</button>;
    } else if (
      this.props.foundUser.followers.includes(this.props.currentUser)
    ) {
      followButton = (
        <button
          className="unfollow"
          onClick={this.props.removeAFollowing.bind(
            this,
            this.props.currentUser,
            this.props.foundUser._id
          )}
        >
          <span>Following</span>
        </button>
      );
    } else {
      followButton = (
        <button
          onClick={this.props.postAddFollowing.bind(
            this,
            this.props.currentUser,
            this.props.foundUser._id
          )}
          className="follow"
        >
          Follow
        </button>
      );
    }

    const messageList = messages.map(m => (
      <MessageItem
        test={m}
        key={m._id}
        date={m.createdAt}
        username={username}
        userId={this.props.foundUser._id}
        text={m.text}
        profileImageUrl={profileImageUrl}
        removeMessage={this.props.removeAMessage.bind(this, m.user, m._id)}
        isCorrectUser={this.props.currentUser === m.user}
      />
    ));

    let followingCard = this.props.foundUser.following.map(r => (
      <SearchCard
        bio={r.bio}
        joinedAt={r.createdAt}
        followers={r.followers}
        following={r.following}
        messages={r.messages}
        profileImageUrl={r.profileImageUrl}
        username={r.username}
        userId={r._id}
        key={r._id}
      />
    ));

    let followersCard = this.props.foundUser.followers.map(r => (
      <SearchCard
        bio={r.bio}
        joinedAt={r.createdAt}
        followers={r.followers}
        following={r.following}
        messages={r.messages}
        profileImageUrl={r.profileImageUrl}
        username={r.username}
        userId={r._id}
        key={r._id}
      />
    ));

    return (
      <section>
        <div className="userProfile">
          <div
            className="banner"
            style={{ backgroundImage: `url(${profileBannerUrl})` }}
          />
          <div className="userHeader" />
          <div className="profilePic">
            <img
              src={profileImageUrl || DefaultProfileImg}
              className="img-fluid rounded-circle"
              alt={this.props.username}
            />
          </div>
          <div className="userName">
            <span className="userNameProfile">{username}</span>
            <span className="userHandleProfile">
              <Link to={`/users/${this.props.foundUser._id}`}>
                @{username} &nbsp;
              </Link>
            </span>

            {followButton}
          </div>
          <div className="stats">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <Link to={`/users/${this.props.foundUser._id}`}>
                  <p className="stat-title">Tiririts</p>
                  <span className="stat-counts">{messages.length}</span>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to={`/users/${this.props.foundUser._id}/followers`}>
                  <p className="stat-title">Followers</p>
                  <span className="stat-counts">{followers.length}</span>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to={`/users/${this.props.foundUser._id}/following`}>
                  <p className="stat-title">Following</p>
                  <span className="stat-counts ">{following.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="smallerUserProfile">
          <div className="smallerBanner" />
          <div className="smallerContent" />
          <div className="smallerProfilePic">
            <img
              src={profileImageUrl || DefaultProfileImg}
              className="img-fluid rounded-circle"
              alt={username}
            />
          </div>
          <div className="smallerScreenName">
            <div className="userName">{username}</div>
            <div className="userHandle">
              <Link to={`/users/${this.props.userId}`}>@{username} &nbsp;</Link>
            </div>
          </div>
          <div className="followBtn">{followButton}</div>
          <div className="smallerTiririts mt-2">
            <Link to={`/users/${this.props.foundUser._id}`}>
              <span className="stat-title d-block">Tiririts</span>
              <span className="stat-counts">{messages.length}</span>.
            </Link>
          </div>
          <div className="smallerFollowing mt-2">
            <Link to={`/users/${this.props.foundUser._id}/following`}>
              <span className="stat-title d-block">Following</span>
              <span className="stat-counts">{following.length}</span>
            </Link>
          </div>
          <div className="smallerFollower mt-2">
            <Link to={`/users/${this.props.foundUser._id}/followers`}>
              <span className="stat-title d-block">Followers</span>
              <span className="stat-counts">{followers.length}</span>
            </Link>
          </div>
        </div>

        {this.props.followersPage ? (
          <div className="d-flex mt-2 flex-sm-row">{followersCard}</div>
        ) : this.props.followingPage ? (
          <div className="followingCards">{followingCard}</div>
        ) : (
          <div>
            <ul className="list-group">{messageList.reverse()}</ul>
          </div>
        )}

        {/* {followingCard} */}
        {/* <ul className="list-group">{messageList.reverse()}</ul> */}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user.id,
    foundUser: state.user.user
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUser,
    removeAMessage,
    postAddFollowing,
    removeAFollowing,
    fetchFollowing,
    fetchFollowers
  }
)(UserProfile);
