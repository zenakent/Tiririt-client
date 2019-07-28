import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";
import SearchForm from "../components/SearchForm";
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
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Home" />
          Tiririt
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          {/* =============================== */}
          <SearchForm />
          {/* =============================== */}
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
