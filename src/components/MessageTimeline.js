import React, { Component } from "react";
import MessageList from "../containers/MessageList";
import UserAside from "../components/UserAside";
import WhoToFollow from "../containers/WhoToFollow";

class MessageTimeline extends Component {
  render() {
    return (
      <div className="row flex-column flex-md-row justify-content-center mt-3">
        <div className="col-sm-12 col-md-5 col-lg-4 order-sm-1 mb-sm-3 mb-3">
          <UserAside />

          <WhoToFollow />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 order-sm-2">
          <MessageList />
        </div>
      </div>
    );
  }
}

export default MessageTimeline;
