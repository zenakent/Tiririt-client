import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postAddFollowing } from "../store/actions/user";
import "../css/RandomUsers.css";

class RandomUsers extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="RandomUsers">
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <img
                className="img-fluid rounded-circle"
                src={this.props.profileImageUrl}
                alt="profile image"
              />
            </div>
            <div className="col-4">
              <div>{this.props.username}</div>
              <div>
                <Link to={`/users/${this.props.userId}`}>
                  @{this.props.username} &nbsp;
                </Link>
              </div>
            </div>
            <div className="col-5">
              <button
                className="followButton"
                onClick={this.props.postAddFollowing.bind(
                  this,
                  this.props.currentUser,
                  this.props.userId
                )}
              >
                follow{" "}
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user.id,
    getRandomUser: state.getRandomUser
  };
}

export default connect(
  mapStateToProps,
  { postAddFollowing }
)(RandomUsers);
