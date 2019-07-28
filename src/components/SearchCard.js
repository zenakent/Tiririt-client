import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <h5 className="card-title">{this.props.username}</h5>
          <h6 className="card-title">
            <Link to={`/users/${this.props.userId}`}>
              @{this.props.username} &nbsp;
            </Link>
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default SearchCard;
