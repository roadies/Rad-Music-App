require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');

const Livestreams = Router();



// Grab livestream api credentials
//Might need the credentials?
const { LsAdminName, LsAdminPass } = process.env;

Livestreams.get('/live',  async (req, res) => {
    await axios.get('http://localhost:8000/api/streams')
        .then(results => {
          console.log(results.data);
          res.send(results.data);
        })
        .catch(err => console.error(err));
});

module.exports = {
  Livestreams,
};
