<<<<<<< HEAD
const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-parse-application-id, x-parse-rest-api-key',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/plain'
};
=======
// const headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-parse-application-id, x-parse-rest-api-key',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'text/plain',
// };
>>>>>>> (update) auth routing
const { Router } = require('express');
const passport = require('passport');
require('../passport-setup');

const Oauth = Router();

// will eventually live somewhere else
const isLoggedIn = (req, res, next) => {
  if (req.session) {
    next();
  } else {
    res.status(401).send('you suck');
  }
};

Oauth.get('/', (req, res) => {
  // console.log(req.headers, 'here');
  res.redirect('/api/oauth/google');
});

Oauth.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

Oauth.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    // Successful authentication, redirect home.
    console.log('never get here');
    res.redirect('/api/oauth/good');
  });

Oauth.get('/failed', (req, res) => res.send('login failure'));

// on successful authentication, get info from session, place in cookie, and redirect to main page
Oauth.get('/good', isLoggedIn, (req, res) => {
  // TODO: if conditional that checks req.session.passport.user.profile prompt
  // if false, redirect to "fill in profile" page. if true, redirect to main page
  const { profilePrompt, userName, genreId } = req.session.passport.user;
  res.cookie('testCookie', { loggedIn: true, userName, genreId }, { maxAge: 10000 }).redirect('http://localhost:3000/');
});

Oauth.get('/logout', (req, res) => {
  // TODO: link to logout link on main page
  req.session = null;
  req.logout();
  res.redirect('/');
});

module.exports = {
  Oauth,
};
