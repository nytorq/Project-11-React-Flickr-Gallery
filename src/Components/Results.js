import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const Results = props => {

  const results = props.data.photo;
  // console.dir(results);
  let photos;
  if (results.length > 0) {
    photos = results.map(photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.png`} key={photo.id}/>
    );

  } else {
    photos = <NoResults />
  }

  return (
      <ul>
        {
          photos
        }
      </ul>

  );
}

export default Results;
