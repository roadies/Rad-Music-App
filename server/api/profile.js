const { useLoadScript } = require('@react-google-maps/api');
const { Router } = require('express');
const { User, Genre } = require('../db/index');

const Profile = Router();

Profile.get('/', (req, res) => {
  res.send('idk man');
});

Profile.post('/', (req, res) => {

});

// handles requests from new user  creation page and creates new user
Profile.post('/create', (req, res) => {
  const { userName, setupGenre, user } = req.body;
  User.findOne({ where: { userName } })
    .then((response) => {
      if (!response) {
        Genre.findOne({ where: { genreName: setupGenre }, attributes: ['id'] })
          .then((result) => {
            User.update({
              userName,
              profilePrompt: true,
              genreId: result.dataValues.id,
            },
            { where: { userName: user } });
          })
          .then(() => {
            res.status(201).send();
          });
      } else {
        throw user;
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send('failure');
    });
});

module.exports = {
  Profile,
};
