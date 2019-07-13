import React, { Component } from "react";
import MessageList from "../containers/MessageList";
import UserAside from "../components/UserAside";

class MessageTimeline extends Component {
  render() {
    return (
      <div className="row flex-column flex-md-row justify-content-center">
        <div className="col-sm-12 col-md-4 order-sm-1 mb-sm-3 mb-3">
          <UserAside
            profileImageUrl={this.props.profileImageUrl}
            username={this.props.username}
            messagesCount={this.props.messagesCount}
          />
        </div>
        <div className="col-sm-12 col-md-8 order-sm-2">
          <MessageList />
        </div>
      </div>
    );
  }
}

export default MessageTimeline;
