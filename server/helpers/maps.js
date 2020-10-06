const axios = require('axios');
const config = require('../config');

const getShows = (request) => {
  const options = {
    url: 'google maps api url goes here',
    headers: {
      authToken: config.GOOGLEMAPS_KEY,
    },
  };
  return axios(options);
};

const postShows = (request) => {
  const options = {
    url: 'google maps api url goes here',
    headers: {
      authToken: config.GOOGLEMAPS_KEY,
    },
  };
  return axios(options);
};

module.exports.getShows = getShows;
module.exports.postShows = postShows;
