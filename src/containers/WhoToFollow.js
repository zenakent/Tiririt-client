import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomUsers } from "../store/actions/getRandomUser";

import RandomUser from "../components/RandomUsers";

class WhoToFollow extends Component {
  async componentDidMount() {
    this.props.fetchRandomUsers();
  }

  render() {
    let randomUsers = this.props.getRandomUser.map(u => {
      return (
        <RandomUser
          key={u._id}
          userId={u._id}
          profileImageUrl={u.profileImageUrl}
          username={u.username}
        />
      );
    });
    return (
      <div className="WhoToFollow mt-5" style={{ border: "1px solid #38444D" }}>
        <div id="messageTop">Who To Follow</div>
        <ul className="list-group">{randomUsers}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user.id,
    getRandomUser: state.getRandomUser
  };
}

export default connect(
  mapStateToProps,
  { fetchRandomUsers }
)(WhoToFollow);
