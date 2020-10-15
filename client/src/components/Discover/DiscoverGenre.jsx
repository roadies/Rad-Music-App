import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DiscoverGenre = ({ genre }) => {
  const [genreSeeds, setGenreSeeds] = useState([]);
  const [genres, setGenres] = useState([]);
  // const [selected, setSelected] = useState('nothing yet');
  const [completed, setCompleted] = useState('');

  const select = (newGenre) => {
    if (!genres.length) {
      setGenres((genres) => genres.concat(genre));
      setGenres((genres) => genres.concat(newGenre.seed));
    } else if (genres.length < 5) {
      setGenres((genres) => genres.concat(newGenre.seed));
    } else if (genres.length === 5) {
      setCompleted('Ok! Let\'s search');
    }
  };

  const searchGenres = () => {
    const genreQueryString = genres.join();
    axios.get(`/api/discover/recs-from-genres/${genreQueryString}`)
      .then((response) => {
        // RECOMMENDATIONS BASED ON GENRE
        response.data.map((rec) => {
          const recObj = {
            name: rec.artists[0].name,
            album: rec.album.name,
            url: rec.external_urls.spotify,
            albumCover: rec.album.images[1].url,
            snippet: rec.album.preview_url,
          };
          console.log('RECOMENDATION', recObj);
          return recObj;
        });
      })
      .catch((err) => {
        console.log('get recs by genre', err);
      });
  };

  useEffect(() => {
    axios.get('/api/discover/genres')
      .then((response) => {
        // response contains the authorization token
        setGenreSeeds(response.data);
      })
      .catch((err) => {
        console.log('DISCOVER JSX RES', err);
      });
  });

  const genreSeedBtn = genreSeeds.map((seed) => <Button variant="outline-info" onClick={() => select({ seed })}>{seed}</Button>);

  return (
    <div>
      <Button onClick={() => searchGenres()}>{completed}</Button>
      <div className="genre-buttons">
        {genreSeedBtn}
      </div>
    </div>
  );
};

export default DiscoverGenre;
