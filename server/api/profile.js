const { Router } = require('express');
const { User, Genre } = require('../db/index');

const Profile = Router();

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
<<<<<<< HEAD
      console.error(error);
=======
<<<<<<< HEAD
=======
      console.error(error);
>>>>>>> fedbae7... (update) comment out console.logs...errors now console.error with status codes
>>>>>>> reformat
      res.status(400).send('failure');
    });
});

module.exports = {
  Profile,
};
