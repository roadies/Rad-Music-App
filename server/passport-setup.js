const passport = require('passport');
const { User, authFunc } = require('./db/index')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { G_CLIENT_KEY, GM_SECRET } = require('./config');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy(
  {
    clientID: `${G_CLIENT_KEY}`,
    clientSecret: `${GM_SECRET}`,
    callbackURL: `${process.env.REDIRECT}api/oauth/google/callback`,
  },
  // use the profile info to check if the user is registered in  your db
  ((accessToken, refreshToken, profile, done) => {
    authFunc(profile)
      .then(async (currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          // const newUser  = User.build({ googleId: profile.id, profilePrompt: false });
          const newUser = User.build({
            googleId: profile.id,
            profilePrompt: false,
            userName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          });
          await newUser.save()
            .then((user) => {
              done(null, user);
            });
        }
      });
  }),
));
