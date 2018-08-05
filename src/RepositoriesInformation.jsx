import React, { Component } from 'react';
import axios from 'axios';

class RepositoriesInformation extends Component {
  constructor(props) {
    super(props);
    this.initialState = {data: [], showStatus: false};
    this.state = this.initialState;
  }

  getRepositoryInformation = () => {
    axios.get(this.props.reposInformation)
      .then(response => {
         this.setState(prevState => ({data: response.data, showStatus: !prevState.showStatus}))
      })
  };

  render() {
    return (
      <div>
         <button onClick={this.getRepositoryInformation} type="button" className="btn btn-success ml-1 mb-4">
          {this.state.showStatus ? <span>Hide Repositories</span> : <span>Show Repositories</span>}
         </button>
         {this.state.showStatus &&
          <ul className="list-group">
            {this.state.data.map((el) => {
              return (
              <li className="list-group-item">
                <h1><a href={el.html_url}>{el.name}</a></h1>
                {el.description && <div>{el.description}</div>}
              </li>)
            })}
          </ul>}
      </div>
    )
  }
};

export default RepositoriesInformation;
