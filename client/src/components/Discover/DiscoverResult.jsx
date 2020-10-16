import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DiscoverResult = ({ additionalGenres, setAdditionalGenres, recResults, setRecResults, setSearched }) => {
  const [render, setRender] = useState(false);
  const [message, setMessage] = useState(null);

  const reset = () => {
    setSearched(false);
    setAdditionalGenres([]);
    setRecResults([]);
  };

  useEffect(() => {
    // if (recResults.length) {
    //   setRender(true);
    // }
  });

  return (
    <div className="container">
      for fans of
      {' '}
      {additionalGenres.join(' + ')}
      <div className="row align-items-center">
        { recResults.map((result) => (
          <div className="col-md-4 mx-auto ">
            <a href={result.url} target="_blank"><img src={result.albumCover} alt={result.album} /></a>
            <h6>
              <b>{result.name}</b>
              {' '}
              <i>{result.album}</i>
            </h6>
          </div>
        ))}
      </div>

      <Button className="new-search" onClick={() => { reset(); }}>new search</Button>
    </div>
  );
};

export default DiscoverResult;
