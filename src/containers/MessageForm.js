import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import "../css/MessageForm.css";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleNewMessage(evt) {
    evt.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: "" });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="MessageForm card text-center">
          <div className="card-header">Got a Message?</div>
          <div className="card-body message-form">
            <form onSubmit={this.handleNewMessage}>
              {this.props.errors.message && (
                <div className="alert alert-danger">
                  {this.props.errors.message}
                </div>
              )}
              <input
                style={{ display: "inline" }}
                type="text"
                name="message"
                className="form-control"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="What's Happening?"
              />
              <button
                type="submit"
                className="btn btn-success pull-right ml-4 mt-3"
              >
                Add my message
              </button>
            </form>
          </div>
          <div className="card-footer text-muted" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
