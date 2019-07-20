import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/actions/user";
import { removeMessage } from "../store/actions/messages";
import DefaultProfileImg from "../images/default-profile-image.jpg";

import MessageItem from "./MessageItem";
import "../css/UserProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  async componentDidMount() {
    const userId = this.props.match.params.id;
    let user = await this.props.fetchUser(userId);
    this.setState({ user: user });
  }
  render() {
    console.log(this.props.foundUser);
    const {
      profileImageUrl,
      username,
      messages,
      following,
      followers
    } = this.props.foundUser;
    console.log(messages);
    if (messages === undefined) {
      return <div />;
    }
    const messageList = messages.map(m => (
      <MessageItem
        test={m}
        key={m._id}
        date={m.createdAt}
        username={username}
        userId={this.props.foundUser._id}
        text={m.text}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={this.props.currentUser === m.user._id}
      />
    ));
    return (
      <section className="userProfile">
        <div className="banner" />
        <div className="userProfileImage">
          <img
            src={profileImageUrl || DefaultProfileImg}
            className="img-fluid rounded-circle"
            alt={username}
          />
        </div>
        <div className="seperator" />
        <div className="userScreenName">
          <span className="userNameProfile">{username}</span>
          <span className="userHandleProfile">
            <Link to={`/users/${this.props.userId}`}>@{username} &nbsp;</Link>
          </span>
          <button className="btn btn-success">follow</button>
        </div>
        <div className="Tiririts mt-1">
          <span className="stat-title">Tiririts</span>
          <span className="stat-counts">{messages.length}</span>
        </div>
        <div className="Following mt-1">
          <span className="stat-title">Followers</span>
          <span className="stat-counts">{followers.length}</span>
        </div>
        <div className="Follower mt-1">
          <span className="stat-title">Following</span>
          <span className="stat-counts">{following.length}</span>
        </div>
        {/* <div className="userProfile-Messages">{messageList}</div> */}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id,
    foundUser: state.user.user
  };
}

export default connect(
  mapStateToProps,
  { fetchUser, removeMessage }
)(UserProfile);
