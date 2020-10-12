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
    res.status(401).send('you suck');
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
  const { profilePrompt, userName } = req.session.passport.user;
  Genre.findOne({ where: { id: req.session.passport.user.genreId } })
    // if user already exists:
    .then((genre) => {
      const genreId = genre.dataValues.genreName;
      // note the 20 in the max age equation corresponds to minutes.
      // to make a cookie that persists for 30 minutes, change the 20 to 30
      res.cookie('testCookie', {
        loggedIn: true,
        userName,
        genreId,
        profilePrompt,
      }, { maxAge: 1000 * 60 * 20 })
        .redirect(`${process.env.REDIRECT}`);
    })
    // if new user:
    .catch(() => {
      res.cookie('testCookie', {
        loggedIn: true,
        userName,
        genreId: '',
        profilePrompt,
      }, { maxAge: 1000 * 60 * 20 })
        .redirect(`${process.env.REDIRECT}`);
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
