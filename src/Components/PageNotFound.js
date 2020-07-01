/*jshint esversion: 6 */
import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <span>
      <h3>Oops! Couldn&#39;t find the page you were looking for.<span role="img" aria-label="An emoji of a person frowning because the page they're looking for ">🙍</span></h3>
      <p>Try searching for something, or go back to <Link to="/">home</Link>.</p>
    </span>
  );
}

export default PageNotFound;
