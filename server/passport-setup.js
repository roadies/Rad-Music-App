const passport = require('passport');
const { User, authFunc } = require('./db/index')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy(
  {
    clientID: '159222256966-1ev6ou4jkndrcgk6mgjn721245jnitc0.apps.googleusercontent.com',
    clientSecret: 'WFTAQtWV64Qs6msmz-VkFA9r',
    callbackURL: 'http://localhost:3000/api/oauth/google/callback',
  },
  // use the profile info to check if the user is registered in your db
  ((accessToken, refreshToken, profile, done) => {
    authFunc(profile)
      .then(async (currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          const newUser = User.build({ googleId: profile.id });
          await newUser.save()
            .then((user) => {
              console.log(user);
              done(null, user);
            });
        }
      });
  }),
));
