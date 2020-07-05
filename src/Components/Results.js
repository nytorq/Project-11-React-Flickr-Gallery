import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';
import Loading from './Loading';

const Results = props => {
  // Grab the collection of photos from the API
  const results = props.data.photo;
  // Grab loading state from App.js
  let loadingState = props.loading;
  let photos;
  if (loadingState) {
    photos = <Loading />
  } else if (results.length > 0) {
      // Begins iterating through the photo collection by placing each photo
      // into a newly spawned Photo component
      photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.png`} key={photo.id}/>
      );
    } else {
      // If there are no results from the search, then we load a component
      // that displays that nothing was found.
      photos = <NoResults />
  }

  return (
      <ul>
        {
          // Lastly, this is where we load the a loading indicator, the photos,
          // or a messaging saying nothing was found.
          photos
        }
      </ul>

  );
}

export default Results;
