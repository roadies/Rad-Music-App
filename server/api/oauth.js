const { Router } = require('express');
const passport = require('passport');
require('../passport-setup');
const { Genre } = require('../db/index');

const Oauth = Router();

// checks if a user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.session) {
    next();
  } else {
    res.status(401).send('no, you suck');
  }
};

Oauth.get('/', (req, res) => {
  res.redirect('/api/oauth/google');
});

// begins google authentication, passes to server/passport-setup.js
Oauth.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// after coming back from server/passport-setup.js, redirects if auth went through
Oauth.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/api/oauth/good');
  });

// send failure upon failed authentication
Oauth.get('/failed', (req, res) => res.send('login failure'));

// on successful authentication, get info from session, place in cookie, and  redirect to main page
Oauth.get('/good', isLoggedIn, (req, res) => {
  const { profilePrompt, userName, id } = req.session.passport.user;
  console.log(req.session);
  Genre.findOne({ where: { id: req.session.passport.user.genreId } })
    // if user already exists:
    .then((genre) => {
      const genreId = genre.dataValues.genreName;
      res.cookie('testCookie', {
        loggedIn: true, userName, genreId, profilePrompt, id,
      }, { maxAge: 600000 }).redirect(`${process.env.REDIRECT}`);
    })
    // if new user:
    .catch(() => {
      res.cookie('testCookie', {
        loggedIn: true, userName, genreId: '', profilePrompt, id,
      }, { maxAge: 600000 }).redirect(`${process.env.REDIRECT}`);
    });
  // console.log(profilePrompt, userName, genreId, 'cookieInfo');
});

// when logging out:
Oauth.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.cookie('testCookie', { loggedIn: false }).redirect(`${process.env.REDIRECT}`);
});

module.exports = {
  Oauth,
};
