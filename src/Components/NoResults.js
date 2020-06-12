import React, { Component } from 'react';

class NoResults extends Component {
  render () {
    return (
      <div class="photo-container">
        <span class="not-found">
          <h2>No Results Found</h2>
          <p>Your search did not return any results. Please try again.</p>
        </span>
      </div>
    )
  }
}

export default NoResults;
