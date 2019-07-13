import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.logout = this.logout.bind(this);
  }

  logout(evt) {
    evt.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark  mb-3">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Home" />
          Tiririt
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div
          class="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          {this.props.currentUser.isAuthenticated ? (
            <ul className="navbar-nav justify-content-between">
              <li className="nav-item">
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Message
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" onClick={this.logout}>
                  Log Out
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav justify-content-between">
              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
