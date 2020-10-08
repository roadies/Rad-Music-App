const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
require('dotenv').config();
require('./passport-setup');

const app = express();
app.use(cors());
const { Shows } = require('./api/shows');
const { Pictures } = require('./api/pictures');
const { Oauth } = require('./api/oauth');
const { Profile } = require('./api/profile');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'radma',
  keys: ['key1', 'key2'],
}));
app.use(passport.initialize());
app.use('/api/shows', Shows);
app.use('/api/pictures', Pictures);
app.use('/api/oauth', Oauth);
app.use('/api/profile', Profile);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(passport.session());

module.exports = {
  app,
};
