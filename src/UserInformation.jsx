import React, { Component } from 'react';

class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.initialState = { name: '', data: {}, err: '', showButton: true };
    this.state = this.initialState;
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mx-auto pb-1">
        <div className="container">
          <h1 className="display-4"><img className="avatar" src={this.props.userInformation.avatar_url} alt=""/><a href={this.props.userInformation.html_url}>{this.props.userInformation.login}</a> </h1>
          <p className="lead">{this.props.userInformation.login} has {this.props.userInformation.public_repos} public repositories,
          follows {this.props.userInformation.following != 1 ? `${this.props.userInformation.following} users` : `${this.props.userInformation.following} user`} and has  {this.props.userInformation.followers != 1 ? `${this.props.userInformation.followers} followers` : `${this.props.userInformation.followers} follower`}.</p>
        </div>
      </div>

    )
  }
};

export default UserInformation;
