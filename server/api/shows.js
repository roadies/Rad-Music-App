const { Router } = require('express');

const Shows = Router();

Shows.get('/', (req, res) => {
  res.send('idk man');
});

Shows.post('/', (req, res) => {

});

module.exports = {
  Shows,
};
