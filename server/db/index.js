const Sequelize = require('sequelize');
// const { now } = require('sequelize/types/lib/utils');
const { SEQUEL_PASS } = require('../config');

// creates database. if dev environment, no password
const db = process.env.ENVIRON === 'dev' ? new Sequelize('radma', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
}) : new Sequelize('radma', 'root', '', {
  host: 'localhost',
  password: SEQUEL_PASS,
  dialect: 'mysql',
  logging: false,
});

// define show table
const Show = db.define('shows', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  venue: Sequelize.STRING,
  date: Sequelize.STRING,
  lat: Sequelize.STRING,
  lng: Sequelize.STRING,
  details: Sequelize.STRING,
});

// define genre table
const Genre = db.define('genres', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  genreName: Sequelize.STRING,
});

// define band table
const Band = db.define('bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandName: Sequelize.STRING,
  genreId: Sequelize.INTEGER,
});

// define user table
const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: Sequelize.STRING,
  pictures: Sequelize.STRING,
  profilePic: Sequelize.STRING,
  googleId: Sequelize.STRING,
  genreId: Sequelize.INTEGER,
  profilePrompt: Sequelize.BOOLEAN,
});

// define shows/bands join table
const ShowsBands = db.define('shows_bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandId: Sequelize.INTEGER,
  showId: Sequelize.INTEGER,
});

// links band and genre table by adding foreign key to band table
Band.belongsTo(Genre);

// links user and genre table by adding foreign key to user table
User.belongsTo(Genre);

// define shows/bands join table
Band.belongsToMany(Show, { through: ShowsBands });
Show.belongsToMany(Band, { through: ShowsBands });

// create tables if they don't exist, do nothing if they do exist
Show.sync();
Genre.sync();
User.sync();
Band.sync();
ShowsBands.sync();

// connect to database
db.authenticate()
  .then(() => {
    console.log('connected to database');
  })
  .catch((error) => {
    console.log(error, 'not connected to database');
  });

// function that authenticates w/ google id
const authFunc = (profile) => User.findOne({
  where: {
    googleId: profile.id,
  },
});

module.exports = {
  db,
  Show,
  Genre,
  User,
  ShowsBands,
  Band,
  authFunc,
};
