require('dotenv').config();
require('./db/index.js');

const { app } = require('./app');

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server listening on :${PORT}`);
});
