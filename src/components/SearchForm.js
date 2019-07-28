import React, { Component } from "react";

import { connect } from "react-redux";
import { searchUser } from "../store/actions/search";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.search);
  }

  render() {
    return (
      <form
        // action="/users/searchUsers"
        // method="GET"
        onSubmit={this.handleSubmit}
        className="form-inline my-2 my-lg-0"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Username/Email"
          aria-label="Search"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
