const { Router } = require('express');

const Profile = Router();

Profile.get('/', (req, res) => {
  res.send('idk man');
});

Profile.post('/', (req, res) => {

});

module.exports = {
  Profile,
};