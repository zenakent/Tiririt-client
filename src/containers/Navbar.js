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
      <nav className="Navbar">
        <div className="brand-name">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Home" />
            Tiririt
          </Link>
        </div>
        <div className="nav-links">
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right no-wraps">
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Message
                </Link>
              </li>
              <li>
                <a onClick={this.logout}>Log Out</a>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right nowraps">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
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
