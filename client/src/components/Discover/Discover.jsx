import React, { useState } from 'react';
import DiscoverGenre from './DiscoverGenre';
import DiscoverArtist from './DiscoverArtist';
import DiscoverResult from './DiscoverResult';

const Discover = (({ userId, genre }) => {
  const [additionalGenres, setAdditionalGenres] = useState([]);
  const [searched, setSearched] = useState(false);
  const [recResults, setRecResults] = useState([]);

  return (
    <div className="container">
      {!searched ? (
        <div>
          <div className="row justify-content-center align-items-baseline d-flex flex-row mt-3">
            <p style={{
              fontSize: '16px',
            }}
            >
              WILDCARD: DISCOVER TUNES OLD & NEW WITH RADMA
            </p>
          </div>
          <div className="row justify-content-around align-items-baseline d-flex flex-row mt-1 mb-1 mx-auto">
            <h3>
              <i>you say</i>
              {' '}
              <b>{genre}</b>
              {' '}
              <i>is your favorite, but what else do you enjoy?</i>
            </h3>
            <p style={{
              fontSize: '11px',
            }}
            >
              SELECT AT LEAST ONE & UP TO FOUR
            </p>
          </div>
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
          <DiscoverResult
            additionalGenres={additionalGenres}
            setAdditionalGenres={setAdditionalGenres}
            recResults={recResults}
            setRecResults={setRecResults}
            setSearched={setSearched}
          />
        )}
    </div>
  );
});

export default Discover;
