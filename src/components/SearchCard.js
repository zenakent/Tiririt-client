import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "../css/SearchCard.css";

class SearchCard extends Component {
  render() {
    return (
      <div className="card mr-3 mb-sm-2" style={{ width: "18rem" }}>
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
          <i className="far fa-calendar-alt" /> Joined:{" "}
          <Moment className="text-muted" format="DD MMM YYYY">
            <span style={{ color: "white" }}>{this.props.joinedAt}</span>
          </Moment>
          <p className="card-text">{this.props.bio}</p>
        </div>
      </div>
      // <div className="card mb-3" style={{ maxWidth: "540px" }}>
      //   <div className="row no-gutters">
      //     <div className="col-md-4">
      //       <img
      //         src={this.props.profileImageUrl}
      //         className="card-img-top rounded-circle img-fluid"
      //         alt={`${this.props.username} profile picture`}
      //       />
      //     </div>
      //     <div className="col-md-8">
      //       <div className="card-body">
      //         <h5 className="card-title" style={{ color: "white" }}>
      //           {this.props.username}
      //         </h5>
      //         <h6 className="card-title">
      //           <Link to={`/users/${this.props.userId}`}>
      //             @{this.props.username} &nbsp;
      //           </Link>
      //         </h6>
      //         <p className="card-text">{this.props.bio}</p>
      //         <p className="card-text">
      //           <small className="text-muted">
      //             <i className="far fa-calendar-alt" /> Joined:{" "}
      //             <Moment className="text-muted" format="DD MMM YYYY">
      //               <span style={{ color: "white" }}>
      //                 {this.props.joinedAt}
      //               </span>
      //             </Moment>
      //           </small>
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default SearchCard;
