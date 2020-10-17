import React, { useState, useEffect } from 'react';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import axios from 'axios';

const DiscoverGenre = ({
  genre, additionalGenres, setAdditionalGenres, recResults, setRecResults, setSearched,
}) => {
  const [genreSeeds, setGenreSeeds] = useState([]);
  const [checked, setChecked] = useState([]);
  const [completed, setCompleted] = useState(false);

  const select = (newGenre) => {
    setChecked(newGenre);
    if (!additionalGenres.length) {
      setAdditionalGenres((additionalGenres) => additionalGenres.concat(genre));
      setAdditionalGenres((additionalGenres) => additionalGenres.concat(newGenre[0]));
      setCompleted(true);
    } else if (additionalGenres.length < 5) {
      setAdditionalGenres((additionalGenres) => additionalGenres.concat(newGenre.slice(1)));
      setCompleted(true);
    }
  };

  const searchGenres = () => {
    const genreQueryString = additionalGenres.join();
    axios.get(`/api/discover/recs-from-genres/${genreQueryString}`)
      .then((response) => {
        // RECOMMENDATIONS BASED ON GENRE
        setSearched(true);
        response.data.map((rec) => {
          const recObj = {
            name: rec.artists[0].name,
            album: rec.album.name,
            url: rec.external_urls.spotify,
            albumCover: rec.album.images[1].url,
            snippet: rec.preview_url,
          };
          setRecResults((recResults) => recResults.concat(recObj));
        });
      })
      .catch();
  };

  useEffect(() => {
    axios.get('/api/discover/genres')
      .then((response) => {
        // response contains the authorization token
        setGenreSeeds(response.data);
      })
      .catch();
  });

  return (
    <div className="container">
      <div className="row align-items-center d-flex flex-row mx-auto">
        <ToggleButtonGroup
          className="px-1"
          type="checkbox"
          value={checked}
          onChange={(e) => select(e)}
          style={{
            flexWrap: 'wrap',
          }}
        >
          {genreSeeds.map((seed) => (
            <ToggleButton
              className="m-1"
              variant="outline-dark"
              style={{
                borderRadius: '6px',
              }}
              value={seed}
            >
              {seed}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className="row align-items-center d-flex flex-row mt-1 mb-3 mx-auto">
        {!completed ? (
          <Button
            variant="dark"
            disabled
            style={{
              backgroundColor: '#49ad47',
              fontWeight: 'bold',
              fontSize: '11px',
            }}
          >
            GET RECS →
          </Button>
        )
          : (
            <Button
              variant="dark"
              onClick={() => searchGenres()}
              style={{
                backgroundColor: '#49ad47',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            >
              GET RECS →
            </Button>
          )}
      </div>
    </div>
  );
};

export default DiscoverGenre;
