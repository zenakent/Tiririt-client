import React, { Component } from "react";
import MessageList from "../containers/MessageList";
import UserAside from "../components/UserAside";

class MessageTimeline extends Component {
  render() {
    return (
      <div className="row flex-column flex-md-row justify-content-center">
        <div className="col-md-4 order-md-1 mb-sm-3 mb-3">
          <UserAside
            profileImageUrl={this.props.profileImageUrl}
            username={this.props.username}
          />
        </div>
        <div className="col-md-8 order-md-2">
          <MessageList />
        </div>
      </div>
    );
  }
}

export default MessageTimeline;
