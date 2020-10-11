/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
const { Router } = require('express');
const { Show, Band, ShowsBands, Genre } = require('../db/index');

const Shows = Router();

Shows.get('/band', async (req, res) => {
  const { query } = req.query;
  let genreId;
  const resp = [];
  const bandId = await Band.findOne({
    where: { bandName: query },
  })
    .then((band) => {
      if (band) {
        genreId = band.dataValues.genreId;
        return band.dataValues.id;
      }
      throw band;
    });
  await ShowsBands.findAll({
    where: {
      bandId,
    },
  })
    .then(async (foundShowsBands) => {
      for (let i = 0; i < foundShowsBands.length; i++) {
        const { showId } = foundShowsBands[i].dataValues;
        const showInfoMaybe = await Show.findOne({
          where: {
            id: showId,
          },
        })
          .then((something) => ({
            bandName: query,
            genreId,
            date: something.dataValues.date,
            venue: something.dataValues.venue,
            lat: something.dataValues.lat,
            lng: something.dataValues.lng,
            details: something.dataValues.details,
          }));
        resp.push(showInfoMaybe);
      }
    });
  res.send(resp);
});

Shows.get('/venue', async (req, res) => {
  const { query } = req.query;
  const resp = [];
  await Show.findAll({
    where: {
      venue: query,
    },
  })
    .then(async (shows) => {
      for (let i = 0; i < shows.length; i++) {
        const { venue, date, details, lat, lng } = shows[i].dataValues;
        await ShowsBands.findAll({
          where: {
            showId: shows[i].dataValues.id,
          },
        })
          .then(async (found) => {
            for (let j = 0; j < found.length; j++) {
              const band = await Band.findOne({
                where: {
                  id: found[j].dataValues.bandId,
                },
              })
                .then((something) => {
                  const { bandName, genreId } = something.dataValues;
                  return ({
                    bandName,
                    genreId,
                    venue,
                    date,
                    details,
                    lat,
                    lng,
                  });
                });
              resp.push(band);
            }
          });
      }
    });
  res.send(resp);
});

Shows.get('/date', async (req, res) => {
  const { query } = req.query;
  const resp = [];
  await Show.findAll({
    where: {
      date: query,
    },
  })
    .then(async (shows) => {
      for (let i = 0; i < shows.length; i++) {
        const { venue, date, details, lat, lng } = shows[i].dataValues;
        await ShowsBands.findAll({
          where: {
            showId: shows[i].dataValues.id,
          },
        })
          .then(async (found) => {
            for (let j = 0; j < found.length; j++) {
              const band = await Band.findOne({
                where: {
                  id: found[j].dataValues.bandId,
                },
              })
                .then((something) => {
                  const { bandName, genreId } = something.dataValues;
                  return ({
                    bandName,
                    genreId,
                    venue,
                    date,
                    details,
                    lat,
                    lng,
                  });
                });
              resp.push(band);
            }
          });
      }
    });
  res.send(resp);
});

Shows.post('/', async (req, res) => {
  // get variables from req
  const {
    bandName,
    venue,
    date,
    details,
    genre,
    lat,
    lng,
  } = req.body;
  // get genreId from genre DB
  const genreId = await Genre.findOne({
    where: {
      genreName: genre,
    },
  })
    .then((genreInfo) => genreInfo.dataValues.id);
  // get showId from show DB
  const showId = await Show.findOne({
    where: {
      venue,
      date,
    },
  })
    .then(async (show) => {
      if (show) {
        return show.dataValues.id;
      }
      const newShow = await Show.create({
        venue,
        date,
        details,
        genreId,
        lat,
        lng,
      });
      return newShow.id;
    });
  // get bandId from band DB
  const bandId = await Band.findOne({
    where: {
      bandName,
    },
  })
    .then(async (band) => {
      if (band) {
        return band.dataValues.id;
      }
      const newBand = await Band.create({
        bandName,
        genreId,
      });
      return newBand.id;
    });
  // check if band/show combo already exists
  await ShowsBands.findOne({
    where: {
      bandId,
      showId,
    },
  })
    .then(async (showBand) => {
      // if combo doesnt exist, create it
      if (!showBand) {
        await ShowsBands.create({
          bandId,
          showId,
        });
        console.log('show created');
      } else {
        console.log('show already exists');
      }
    });
});

module.exports = {
  Shows,
};
