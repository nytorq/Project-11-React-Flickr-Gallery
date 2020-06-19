import React from 'react';
import Photo from './Photo';

const Results = props => {

  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        <Photo />
        <li>
          <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Results;
