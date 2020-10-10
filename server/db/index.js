const Sequelize = require('sequelize');
// const { now } = require('sequelize/types/lib/utils');
const { SEQUEL_PASS } = require('../config')

const db = new Sequelize('radma', 'root', '', {
  host: 'localhost',
  // password: SEQUEL_PASS,
  dialect: 'mysql',
  logging: false,
});

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

const Genre = db.define('genres', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  genreName: Sequelize.STRING,
});

// populate genres table
const genres = ['Alternative', 'Blues', 'Classical', 'Easy Listening', 'Electronic', 'Hip-Hop/Rap', 'K-Pop', 'Pop', 'R&B/Soul'];
genres.forEach((genre) => {
  Genre.findOne({ where: { genreName: genre } })
    .then(async (result) => {
      if (!result) {
        await Genre.create({
          genreName: genre,
        });
      }
    });
});

const Band = db.define('bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandName: Sequelize.STRING,
  genreId: Sequelize.INTEGER,
});

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

const ShowsBands = db.define('shows_bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandId: Sequelize.INTEGER,
  showId: Sequelize.INTEGER,
});

// adds genreId to band
Band.belongsTo(Genre);

// add genreID to user
User.belongsTo(Genre);

// create shows bands join table
Band.belongsToMany(Show, { through: ShowsBands });
Show.belongsToMany(Band, { through: ShowsBands });

// populate show table with fake data
Show.findOne({ where: { id: 1 } })
  .then((result) => {
    if (!result) {
      Show.create({
        address: '225 Decatur St, New Orleans, LA 20130',
        date: '2020-11-12',
        venue: 'House of Blues New Orleans',
        details: '18+',
        lat: '29.9532033',
        lng: '-90.0660795',
      });
    }
  });

Show.findOne({ where: { id: 2 } })
  .then((result) => {
    if (!result) {
      Show.create({
        address: '726 St Peter, New Orleans, LA 70116',
        date: '2020-11-13',
        venue: 'Preservation Hall',
        details: '$5 cover',
        lat: '29.958316',
        lng: '-90.0653949',
      });
    }
  });

// populate Band table with  fake data
Band.findOne({ where: { id: 1 } })
  .then((result) => {
    if (!result) {
      Band.create({
        bandName: 'Nickelback',
        genreId: 1,
      });
    }
  });

Band.findOne({ where: { id: 2 } })
  .then((result) => {
    if (!result) {
      Band.create({
        bandName: 'Rick Astley',
        genreId: 6,
      });
    }
  });

// populate User table with  fake data
User.findOne({ where: { id: 1 } })
  .then((result) => {
    if (!result) {
      User.create({
        userName: 'MachoManRandySavage',
        profilePic: 'https://411mania.com/wp-content/uploads/2019/04/Randy-Savage-3-6-1989-1-645x370.png',
        googleId: '12345google',
        genreId: 5,
        profilePrompt: true,
      });
    }
  });

User.findOne({ where: { id: 2 } })
  .then((result) => {
    if (!result) {
      User.create({
        userName: 'music_luvr_4',
        profilePic: 'https://vignette.wikia.nocookie.net/southpark/images/e/e2/Professor-chaos-hooded.png/revision/latest?cb=20171003212334',
        googleId: 'asldfjoelskjdafase3234232434234',
        genreId: 2,
        profilePrompt: true,
      });
    }
  });

// populate showsbands table with  fake data
ShowsBands.findOne({ where: { id: 1 } })
  .then((result) => {
    if (!result) {
      ShowsBands.create({
        bandId: 1,
        showId: 2,
      });
    }
  });

ShowsBands.findOne({ where: { id: 2 } })
  .then((result) => {
    if (!result) {
      ShowsBands.create({
        bandId: 2,
        showId: 1,
      });
    }
  });

Show.sync();
Genre.sync();
User.sync();
Band.sync();
ShowsBands.sync();

db.authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error, 'not connected');
  });

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
