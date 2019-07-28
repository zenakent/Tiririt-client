import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.search]: evt.target.value
    });
  }

  render() {
    return (
      <form
        action="/users/searchUsers"
        method="GET"
        className="form-inline my-2 my-lg-0"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Username/Email"
          aria-label="Search"
          name="search"
          value={this.state.text}
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
