import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DiscoverResult = ({
  additionalGenres, setAdditionalGenres, recResults, setRecResults, setSearched,
}) => {
  const reset = () => {
    setSearched(false);
    setAdditionalGenres([]);
    setRecResults([]);
  };

  return (
    <div className="container">
      <div className="row justify-content-between align-items-baseline d-flex flex-row mt-4 mb-1 mx-auto">
        <h3>
          for fans of
          {' '}
          <b>{additionalGenres.join(' + ')}</b>
        </h3>
        <p style={{
          fontSize: '11px',
        }}
        >
          <a href="#" onClick={() => { reset(); }}>← GO BACK</a>
        </p>
      </div>
      <div className="row align-items-center">
        { recResults.map((result) => (
          <div className="col-md-4 mx-auto">
            <a href={result.url} target="_blank"><img src={result.albumCover} alt={result.album} /></a>
            <h6>
              <b>{result.name}</b>
              {' '}
              <i>{result.album}</i>
            </h6>
          </div>
        ))}
      </div>
      <div className="row align-items-center d-flex flex-row mt-3 mb-3 mx-auto">
        <Button
          variant="dark"
          onClick={() => { reset(); }}
          style={{
            backgroundColor: '#49ad47',
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        >
          NEW SEARCH ↻
        </Button>
      </div>
    </div>
  );
};

export default DiscoverResult;
