import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import "../css/UserAside.css";

class UserAside extends Component {
  render() {
    console.log(this.props);
    const {
      id,
      username,
      profileImageUrl,
      profileBannerUrl,
      followers,
      following,
      messages
    } = this.props.currentUser.user;

    return (
      <section className="UserAside">
        <div
          className="UserAside-Banner"
          style={{ backgroundImage: `url(${profileBannerUrl})` }}
        >
          {/* <img src={BannerImage} className="img-fluid" alt="..." /> */}
        </div>
        <div className="profile-Image">
          <img
            src={profileImageUrl || DefaultProfileImg}
            className="img-fluid rounded-circle"
            alt={username}
          />
        </div>
        <div className="userScreenName">
          <div className="userName">{username}</div>
          <div className="userHandle">
            <Link to={`/users/${id}`}>@{username} &nbsp;</Link>
          </div>
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
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(UserAside);
