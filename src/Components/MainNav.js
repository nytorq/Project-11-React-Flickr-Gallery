import React, { Component } from 'react';

class MainNav extends Component {
  state = {

  }

  render() {
    return (
      <nav class="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;