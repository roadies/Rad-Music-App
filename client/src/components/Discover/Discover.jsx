import React from 'react';
import DiscoverGenre from './DiscoverGenre';
import DiscoverArtist from './DiscoverArtist';

const Discover = (({ userId, genre }) => (
  <div>
    <h2>find new tunes with radma </h2>
    <h5>search for new tunes by genre</h5>
    <h5>search for new tunes by bands you are interested in</h5>
    <h3>
      {genre}
      {' '}
      is your favorite ... what else do you enjoy?
    </h3>
    <h7>select up to five.</h7>
    <DiscoverGenre genre={genre} />
    <DiscoverArtist userId={userId} />
  </div>
));

export default Discover;
