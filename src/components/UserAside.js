import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import "../css/UserAside.css";

class UserAside extends Component {
  render() {
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
      <aside className="UserAside">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-4 col-sm-4 col-md-4">
                <img
                  src={this.props.profileImageUrl || DefaultProfileImg}
                  alt={this.props.username}
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <div className="col-4 col-sm-4 col-md-4">
                <div className="row">
                  <h4 className="ml-1">{this.props.username}</h4>
                </div>
                <div className="row">
                  <Link to="/">@{this.props.username} &nbsp;</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container">aldjfghadjklg</div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default UserAside;
