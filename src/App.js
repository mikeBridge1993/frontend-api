import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import RepositoriesInformation from './RepositoriesInformation';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.initialState = { name: '', data: {}, err: '', showButton: true };
    this.state = this.initialState;
  }

  getUserInformation = () => {
    axios.get(`https://api.github.com/users/${this.state.name}`)
      .then(response => this.setState({data: response.data, err: '', showButton: false}))
      .catch(error => {
        let err;
        error.response.status === 404 ? err = 'User not found' : err = 'Unable to perform request.'
        this.setState({err})
      })
    };

  inputUserOnChange = e => {
    this.setState({name: e.target.value})
  }

  clearUserOnClick = () => {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-content">
          <div className="App-inputs mb-2">
            {this.state.showButton && <input type="text" className="form-control" value={this.state.name} onChange={this.inputUserOnChange} />}
            {this.state.showButton && <button type="button" className="btn btn-primary mx-1" onClick={this.getUserInformation}>Find user</button>}
            <button type="button" className="btn btn-warning" onClick={this.clearUserOnClick}>
              Clear User
            </button>
          </div>
          {Object.keys(this.state.data).length !== 0 &&
            <div className="App-info pb-5">
              <UserInformation userInformation={this.state.data} />
              <RepositoriesInformation reposInformation={this.state.data.repos_url} />
            </div>}
          {this.state.err &&
            <div className="alert alert-danger">
              {this.state.err}
            </div>}
        </div>
    </div>
    );
  }
}

export default App;
