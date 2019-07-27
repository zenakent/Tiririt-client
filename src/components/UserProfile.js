import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchUser,
  removeAMessage,
  postAddFollowing,
  removeAFollowing
} from "../store/actions/user";
// import { postAddFollowing } from "../store/actions/following";

import DefaultProfileImg from "../images/default-profile-image.jpg";

import MessageItem from "./MessageItem";
import "../css/UserProfile.css";

class UserProfile extends Component {
  async componentDidMount() {
    const userId = this.props.match.params.id;
    await this.props.fetchUser(userId);
  }

  render() {
    const {
      profileImageUrl,
      username,
      messages,
      following,
      followers
    } = this.props.foundUser;

    if (messages === undefined) {
      return <div />;
    }
    let followButton;
    console.log(this.props);
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
    return (
      <section>
        <div className="userProfile">
          <div className="banner" />
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
              <Link to={`/users/${this.props.userId}`}>@{username} &nbsp;</Link>
            </span>

            {followButton}
          </div>
          <div className="stats">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <p className="stat-title">Tiririts</p>
                <span className="stat-counts">{messages.length}</span>
              </li>
              <li className="list-group-item">
                <p className="stat-title">Followers</p>
                <span className="stat-counts">{followers.length}</span>
              </li>
              <li className="list-group-item">
                <p className="stat-title">Following</p>
                <span className="stat-counts ">{following.length}</span>
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
            <span className="stat-title">Tiririts</span>
            <span className="stat-counts">{messages.length}</span>
          </div>
          <div className="smallerFollowing mt-2">
            <span className="stat-title">Following</span>
            <span className="stat-counts">{following.length}</span>
          </div>
          <div className="smallerFollower mt-2">
            <span className="stat-title">Followers</span>
            <span className="stat-counts">{followers.length}</span>
          </div>
        </div>
        <div>
          <ul className="list-group">{messageList.reverse()}</ul>
        </div>
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
  { fetchUser, removeAMessage, postAddFollowing, removeAFollowing }
)(UserProfile);
