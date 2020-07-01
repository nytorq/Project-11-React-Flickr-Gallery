import React, { Component } from 'react';

class NoResults extends Component {
  render () {
    return (
        <span className="not-found">
          <p>Your search did not return any results. Please try again.</p>
        </span>
    )
  }
}

export default NoResults;
