import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
// import MessageForm from "../containers/MessageForm";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, removeMessage } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        test={m}
        key={m._id}
        date={m.createdAt}
        username={m.user.username}
        text={m.text}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={this.props.currentUser === m.user._id}
      />
    ));
    return (
      <div className="row col-sm-8 col-8">
        <div className=" col-sm-10">
          <ul className="list-group" id="messages">
            {messageList.reverse()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessageList);
