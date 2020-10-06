const axios = require('axios');
const config = require('../config');

const getImages = (request) => {
  const options = {
    url: 'imgur api url goes here',
    headers: {
      authToken: config.IMGUR_KEY,
    },
  };
  return axios(options);
};

const postImages = (request) => {
  const options = {
    url: 'imgur api url goes here',
    headers: {
      authToken: config.IMGUR_KEY,
    },
  };
  return axios(options);
};

module.exports.getImages = getImages;
module.exports.postImages = postImages;
