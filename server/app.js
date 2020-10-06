const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { Shows } = require('./api/shows');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(express.static(CLIENT_PATH));
app.use(bodyParser.json());
app.use('/api/shows', Shows);

module.exports = {
  app,
};
