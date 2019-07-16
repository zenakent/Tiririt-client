import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import BannerImage from "../images/useraside-banner.jpeg";
import "../css/UserAside.css";

class UserAside extends Component {
  render() {
    return (
      <section>
        <div className="UserAside card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="d-flex justify-content-center align-items-center col-md-4 col-4 profile-Image">
              <img
                src={this.props.profileImageUrl || DefaultProfileImg}
                className="card-img img-fluid rounded-circle"
                alt={this.props.username}
              />
            </div>
            <div className="">
              <div className="card-body">
                <div className="userScreenName px-md-0">
                  <div className="card-name">{this.props.username}</div>
                  {/* <h6 className="card-title"></h6> */}
                  <p className="card-text">
                    <span id="userHandle">
                      <Link to="/">@{this.props.username} &nbsp;</Link>
                    </span>
                  </p>
                </div>
                <div className="userStats d-md-none">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <h6>Tiririts</h6>
                      <a href="#">{this.props.messagesCount}</a>
                    </li>
                    <li className="list-group-item">
                      <h6>Followers</h6>
                      <a href="#">{this.props.followersCount}</a>
                    </li>
                    <li className="list-group-item">
                      <h6>Following</h6>
                      <a href="#">{this.props.followingCount}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters d-none d-md-block userStats">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <h6>Tiririts</h6>
                <a href="#">{this.props.messagesCount}</a>
              </li>
              <li className="list-group-item">
                <h6>Followers</h6>
                <a href="#">{this.props.followersCount}</a>
              </li>
              <li className="list-group-item">
                <h6>Following</h6>
                <a href="#">{this.props.followingCount}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="UserAside card" style={{ maxWidth: "540px" }}>
          <img src={BannerImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="profile-Image col-4">
              <img
                src={this.props.profileImageUrl || DefaultProfileImg}
                className="card-img img-fluid rounded-circle"
                alt={this.props.username}
              />
            </div>
            <div className="userScreenName px-md-0 col-8">
              <div className="card-name">{this.props.username}</div>
              {/* <h6 className="card-title"></h6> */}
              <p className="card-text">
                <span id="userHandle">
                  <Link to="/">@{this.props.username} &nbsp;</Link>
                </span>
              </p>
            </div>
            <div className="userStats">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <h6>Tiririts</h6>
                  <a href="#">{this.props.messagesCount}</a>
                </li>
                <li className="list-group-item">
                  <h6>Followers</h6>
                  <a href="#">{this.props.followersCount}</a>
                </li>
                <li className="list-group-item">
                  <h6>Following</h6>
                  <a href="#">{this.props.followingCount}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserAside;
