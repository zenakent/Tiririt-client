import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import BannerImage from "../images/useraside-banner.jpeg";
import "../css/UserAside.css";

class UserAside extends Component {
  render() {
    return (
      <section className="UserAside">
        <div className="UserAside-Banner">
          {/* <img src={BannerImage} className="img-fluid" alt="..." /> */}
        </div>
        <div className="profile-Image">
          <img
            src={this.props.profileImageUrl || DefaultProfileImg}
            className="img-fluid rounded-circle"
            alt={this.props.username}
          />
        </div>
        <div className="userScreenName">
          <div className="userName">{this.props.username}</div>
          <div className="userHandle">
            <Link to="/">@{this.props.username} &nbsp;</Link>
          </div>
        </div>
        <div className="Tiririts mt-1">
          <span className="stat-title">Tiririts</span>
          <span className="stat-counts">{this.props.messagesCount}</span>
        </div>
        <div className="Following mt-1">
          <span className="stat-title">Followers</span>
          <span className="stat-counts">{this.props.followersCount}</span>
        </div>
        <div className="Follower mt-1">
          <span className="stat-title">Following</span>
          <span className="stat-counts">{this.props.followingCount}</span>
        </div>
      </section>
    );
  }
}

export default UserAside;
