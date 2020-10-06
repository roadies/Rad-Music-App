require('dotenv').config();
require('./db/index.js');

const { app } = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
