import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image3.png";
import "../css/MessageItem.css";

class MessageItem extends Component {
  render() {
    return (
      <div className="MessageItem">
        <li className="list-group-item Message-containment">
          <div className="MessageItem-img-div">
            <img
              src={this.props.profileImageUrl || DefaultProfileImg}
              alt={this.props.username}
              className="img-fluid timeline-image"
            />
          </div>

          <div className="message-area">
            <Link to={`/users/${this.props.userId}`}>
              @{this.props.username} &nbsp;
            </Link>
            <span className="text-muted">
              <Moment className="text-muted" format="DD MMM YYYY">
                {this.props.date}
              </Moment>
            </span>
            <p>{this.props.text}</p>
            {this.props.isCorrectUser && (
              <button
                className="btn btn-danger"
                onClick={this.props.removeMessage}
              >
                Delete
              </button>
            )}
          </div>
        </li>
      </div>
    );
  }
}

export default MessageItem;
