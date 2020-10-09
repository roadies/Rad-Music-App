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
    callbackURL: 'http://localhost:3000/api/oauth/google/callback',
  },
  // use the profile info to check if the user is registered in  your db
  ((accessToken, refreshToken, profile, done) => {
    console.log(accessToken, "accessToken Here");
    authFunc(profile)
      .then(async (currentUser) => {
        console.log(currentUser, 'current user');
        if (currentUser) {
          done(null, currentUser);
        } else {
          // const newUser = User.build({ googleId: profile.id, profilePrompt: false });
          const newUser = User.build({
            googleId: profile.id,
            profilePrompt: false,
            userName: 'Mike',
            genreId: 5,
          });
          await newUser.save()
            .then((user) => {
              console.log('registered new user');
              done(null, user);
            });
        }
      });
  }),
));
