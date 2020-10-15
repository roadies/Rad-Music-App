const { Router } = require('express');
const axios = require('axios');

const Discover = Router();

const { Event } = require('../db/index');

// first get the authorization token from spotify
Discover.get('/genres', (req, res) => {
  axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      redirect_uri: process.env.REDIRECT,
      grant_type: 'client_credentials',
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: process.env.SPOTIFY_CLIENT_ID,
      password: process.env.SPOTIFY_CLIENT_SECRET,
    },
  }).then((authorization) => {
    // once you have token, get the genre seeds
    const accessToken = authorization.data.access_token;
    axios({
      url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((genreSeeds) => {
      const { genres } = genreSeeds.data;
      // send those genre seeds off to the frontend
      res.status(200).send(genres);
    }).catch((err) => console.error(err));
  }).catch((err) => console.error(err));
});

// recommendations based off favorite genres
Discover.get('/recs-from-genres/:genres', (req, res) => {
  const { genres } = req.params;
  axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      redirect_uri: process.env.REDIRECT,
      grant_type: 'client_credentials',
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: process.env.SPOTIFY_CLIENT_ID,
      password: process.env.SPOTIFY_CLIENT_SECRET,
    },
  }).then((authorization) => {
    // once you have token, get the recommendations based off genre
    const accessToken = authorization.data.access_token;
    // console.log(accessToken);
    axios({
      url: 'https://api.spotify.com/v1/recommendations',
      method: 'get',
      params: {
        market: 'US',
        seed_genres: genres,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((recommendations) => {
      const recs = recommendations.data.tracks;
      res.status(200).send(recs);
    });
  });
});

// recommendations based off bands saved to user's profile
// loop through array to get spotify ids of each band
// create one string out of spotify ids
// run query using the string as seed_artists

// Discover.get('/retrieveSavedArtists/:userId', (req, res) => {
//   const { userId } = req.params;
//   const artistIds = [];
//   Event.findAll({
//   // find events attached to username
//     where: { userId },
//     attributes: ['name'],
//   })
//     .then((savedArtists) => {
//     // iterate through events to get artist ids
//       savedArtists.map((artist) => {
//       // first get authorization token
//         axios({
//           url: 'https://accounts.spotify.com/api/token',
//           method: 'post',
//           params: {
//             redirect_uri: process.env.REDIRECT,
//             grant_type: 'client_credentials',
//           },
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           auth: {
//             username: process.env.SPOTIFY_CLIENT_ID,
//             password: process.env.SPOTIFY_CLIENT_SECRET,
//           },
//         }).then((authorization) => {
//           // then use authorization token to convert artist name to artist id
//           const accessToken = authorization.data.access_token;
//           axios({
//             url: 'https://api.spotify.com/v1/search',
//             method: 'get',
//             params: {
//               q: artist.name,
//               type: 'artist',
//               limit: 1,
//             },
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }).then((artists) => {
//             const spotifyId = artists.data.artists.items[0].id;
//             console.log('SPOTIFY', spotifyId);
//             artistIds.push(spotifyId);
//           });
//         });
//       });
//     // we've finished mapping here
//     });
//   // after artist names have been converted to param string
// });

Discover.get('/retrieveSavedArtists/:userId', (req, res) => {
  const { userId } = req.params;
  const artistIds = [];
  Event.findAll({
  // find events attached to username
    where: { userId },
    attributes: ['name'],
  }).then((saved) => res.status(200).send(saved));
});

module.exports = {
  Discover,
};
