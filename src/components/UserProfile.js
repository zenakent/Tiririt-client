import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, removeAMessage } from "../store/actions/user";
import { removeMessage } from "../store/actions/messages";
import DefaultProfileImg from "../images/default-profile-image.jpg";

import MessageItem from "./MessageItem";
import "../css/UserProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    //try just setting the state to the user messages instead of the whole user
    this.state = { messages: [] };

    this.handleRemove = this.handleRemove.bind(this);
  }

  async componentDidMount() {
    const userId = this.props.match.params.id;
    let user = await this.props.fetchUser(userId);
    this.setState({ messages: user.messages });
  }

  handleRemove(currentUser, userId) {
    this.props.removeMessage(currentUser, userId);
  }

  render() {
    if (this.state.user === null) {
      return <div />;
    }

    // console.log(this.state.messages);
    console.log(this.props.messages);
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

    if (profileImageUrl === undefined) {
      return <div />;
    }
    // const {
    //   profileImageUrl,
    //   username,
    //   messages,
    //   following,
    //   followers
    // } = this.state.user;

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
        // removeMessage={this.props.removeMessage(m.user, m._id)}
        isCorrectUser={this.props.currentUser === m.user}
      />
    ));

    // const messageList = this.state.messages.map(m => (
    //   <MessageItem
    //     test={m}
    //     key={m._id}
    //     text={m.text}
    //     date={m.createdAt}
    //     username={username}
    //     userId={this.props.foundUser._id}
    //     currentUserId={this.props.currentUser}
    //     profileImageUrl={profileImageUrl}
    //     isCorrectUser={this.props.currentUser === m.user}
    //     removeMessage={this.props.removeAMessage.bind(this, m.user, m._id)}
    //   />
    // ));
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
        <div className="userProfile-Messages">
          <ul className="list-group" id="messages">
            {messageList.reverse()}
          </ul>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.user.messages,
    currentUser: state.currentUser.user.id,
    foundUser: state.user.user
  };
}

export default connect(
  mapStateToProps,
  { fetchUser, removeMessage, removeAMessage }
)(UserProfile);
