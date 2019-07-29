import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "../css/SearchCard.css";

class SearchCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.profileImageUrl}
          className="card-img-top"
          alt={`${this.props.username} profile picture`}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            {this.props.username}
          </h5>
          <h6 className="card-title">
            <Link to={`/users/${this.props.userId}`}>
              @{this.props.username} &nbsp;
            </Link>
          </h6>
          <i class="far fa-calendar-alt" /> Joined:{" "}
          <Moment className="text-muted" format="DD MMM YYYY">
            <span style={{ color: "white" }}>{this.props.joinedAt}</span>
          </Moment>
          <p className="card-text">{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default SearchCard;
