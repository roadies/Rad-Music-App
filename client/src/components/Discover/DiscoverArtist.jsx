import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const discoverArtist = ({ userId }) => {
  const [savedArtists, setSavedArtists] = useState([]);

  const getRecsByArtist = () => {
    axios.get(`api/discover/retrieveSavedArtists/${userId}`)
      .then((saved) => {
        saved.data.map((a) => setSavedArtists((savedArtists) => savedArtists.concat(a.name)));
      })
      .then(() => {
        savedArtists.split();
      })
      .catch((err) => {
        console.log('get recs by band', err);
      });
  };

  useEffect(() => {
    getRecsByArtist();
  }, []);

  return (
    <div>
      <p>
        you liked
        { savedArtists}
        , maybe you will like:
      </p>
    </div>
  );
};

export default discoverArtist;
