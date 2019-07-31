import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postAddFollowing, removeAFollowing } from "../store/actions/user";
import "../css/RandomUsers.css";

class RandomUsers extends Component {
  render() {
    let followButton;

    if (this.props.currentUser.user.following.includes(this.props.userId)) {
      followButton = (
        <button
          className="unfollow"
          onClick={this.props.removeAFollowing.bind(
            this,
            this.props.currentUser.user.id,
            this.props.userId
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
            this.props.currentUser.user.id,
            this.props.userId
          )}
          className="follow"
        >
          Follow
        </button>
      );
    }
    return (
      <div className="RandomUsers">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid rounded-circle"
                src={this.props.profileImageUrl}
                alt="profile image"
              />
            </div>
            <div className="col-6">
              <div className="RandomUsersUsername">{this.props.username}</div>
              <div>
                <Link to={`/users/${this.props.userId}`}>
                  @{this.props.username} &nbsp;
                </Link>
              </div>
            </div>
            {/* <div className="col-5 px-0">{followButton}</div> */}
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    getRandomUser: state.getRandomUser
  };
}

export default connect(
  mapStateToProps,
  { postAddFollowing, removeAFollowing }
)(RandomUsers);
