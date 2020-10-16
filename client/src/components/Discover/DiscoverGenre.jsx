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
    <div>
      <div className="row align-items-center w-50 d-flex flex-row mx-auto">
        <ToggleButtonGroup
          type="checkbox"
          value={checked}
          onChange={(e) => select(e)}
          style={{
            flexWrap: 'wrap',
          }}
        >
          {genreSeeds.map((seed) => (
            <ToggleButton
              className="p-2"
              variant="outline-info"
              value={seed}
            >
              {seed}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      {!completed ? <Button variant="dark" disabled>search</Button>
        : <Button variant="dark" onClick={() => searchGenres()}>search</Button>}
    </div>
  );
};

export default DiscoverGenre;

