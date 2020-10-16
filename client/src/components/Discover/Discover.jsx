import React, { useState } from 'react';
import DiscoverGenre from './DiscoverGenre';
import DiscoverArtist from './DiscoverArtist';
import DiscoverResult from './DiscoverResult';

const Discover = (({ userId, genre }) => {
  const [additionalGenres, setAdditionalGenres] = useState([]);
  const [searched, setSearched] = useState(false);
  const [recResults, setRecResults] = useState([]);

  return (
    <div>
      {!searched ? (
        <div className="search">
          <h2>find new tunes with radma </h2>
          <h3>
            you say
            {' '}
            {genre.toUpperCase()}
            {' '}
            is your favorite, but what else do you enjoy?
          </h3>
          <h7>add at least one & up to four</h7>
          <DiscoverGenre
            genre={genre}
            additionalGenres={additionalGenres}
            setAdditionalGenres={setAdditionalGenres}
            setSearched={setSearched}
            recResults={recResults}
            setRecResults={setRecResults}
          />
        </div>
      )
        : (
          <div className="results">
            <DiscoverResult
              additionalGenres={additionalGenres}
              setAdditionalGenres={setAdditionalGenres}
              recResults={recResults}
              setRecResults={setRecResults}
              setSearched={setSearched}
            />
          </div>
        )}
    </div>
  );
});

export default Discover;
