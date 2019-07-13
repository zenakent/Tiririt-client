import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import "../css/UserAside.css";

class UserAside extends Component {
  render() {
    console.log(this.props);
    // <aside className="col-sm-2 col-2 UserAside">
    //   <div className="panel panel-default">
    //     <div className="panel-body">
    //       <img
    //         src={this.props.profileImageUrl || DefaultProfileImg}
    //         alt={this.props.username}
    //         className="img-thumbnail rounded-circle"
    //       />
    //       <h4>{this.props.username}</h4>
    //     </div>
    //   </div>
    // </aside>
    return (
      <div className="UserAside card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4 col-4">
            <img
              src={this.props.profileImageUrl || DefaultProfileImg}
              className="card-img rounded-circle"
              alt={this.props.username}
            />
          </div>
          <div className="col-md-8 col-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.username}</h5>
              <p className="card-text">
                <Link to="/">@{this.props.username} &nbsp;</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <h6>Tiririts</h6>
              <a href="#">{this.props.messagesCount}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserAside;
