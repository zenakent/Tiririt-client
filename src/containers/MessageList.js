import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
import MessageForm from "../containers/MessageForm";

class MessageList extends Component {
  async componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.messages);
    // console.log(this.props.currentUser.user.following);
    let newMessageList = this.props.messages.filter(m => {
      if (this.props.currentUser.user.following.includes(m.user._id)) {
        return m.user._id;
      }
    });

    const { removeMessage } = this.props;

    let messageList = newMessageList.map(m => (
      <MessageItem
        test={m}
        key={m._id}
        date={m.createdAt}
        username={m.user.username}
        userId={m.user._id}
        text={m.text}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={this.props.currentUser.user.id === m.user._id}
      />
    ));

    return (
      <div>
        {/* <MessageForm /> */}
        <div id="messageTop">Tiririts</div>
        <ul className="list-group" id="messages">
          {messageList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessageList);
