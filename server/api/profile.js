const { Router } = require('express');
const { User, Genre, Event } = require('../db/index');

const Profile = Router();

Profile.get('/events', (req, res) => {
  Event.findAll().then((data) => res.send(data)).catch((err) => console.error(err));
});

Profile.get('/events/:userId', (req, res) => {
  const { userId } = req.params;

  Event.findAll({ where: { userId } })
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

Profile.post('/events/:userId', (req, res) => {
  const { userId } = req.params;

  const {
    venue, date, lat, lng, details, genre, name,
  } = req.body;

  Event.create({
    venue, date, lat, lng, details, genre, userId, name,
  })
    .then((data) => console.info(data))
    .catch((err) => console.error(err));
});

// handles requests from new user  creation page and creates new user
Profile.post('/create', (req, res) => {
  const { userName, setupGenre, user } = req.body;
  // search for user matching username from client
  User.findOne({ where: { userName } })
    .then((response) => {
      // if username doesnt exist
      if (!response) {
        // find genreId for selected genre
        Genre.findOne({ where: { genreName: setupGenre }, attributes: ['id'] })
          .then((result) => {
            // replace temporary username with selected username and relevant info
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
    // if username has already been used, send failure message
    .catch((error) => {
      console.error(error);
      res.status(400).send('failure');
    });
});

module.exports = {
  Profile,
};
