import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "../components/UserInfo";
import { thunk_action_creator } from "../actions/fetchAction";
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.dispatch(thunk_action_creator(username));
    this.getUsername.value = "";
    console.log(username);
  };

  render() {
    console.log(this.props.data);
    console.log("isFetching>>>", this.props.data.isFetching);
    console.log("isError>>>", this.props.data.isError);
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="title">Enter Username</h2>
          <input
            type="text"
            required
            placeholder="username"
            ref={input => {
              this.getUsername = input;
            }}
          />
          <button className="button">Submit</button>
        </form>

        {this.props.data.isFetching ? <h3>Loading....</h3> : null}

        {this.props.data.isError ? (
          <h3 className="error">No Such User exists.</h3>
        ) : null}

        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo user={this.props.data.userData} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
