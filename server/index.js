// const express = require('express');
// const path = require('path'); // NEW
// const dbConnection = require('./db/index.js');

// const app = express();
// const port = process.env.PORT || 3000;
// const DIST_DIR = path.join(__dirname, '../client/dist'); // NEW
// const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
// const mockResponse = {
//   foo: 'bar',
//   bar: 'foo',
// };
// app.use(express.static(DIST_DIR)); // NEW
// app.get('/api', (req, res) => {
//   res.send(mockResponse);
// });
// app.get('/', (req, res) => {
//   res.sendFile(HTML_FILE); // EDIT
// });
// app.listen(port, () => {
//   console.log(`App listening on port: ${port}`);
// });

require('dotenv').config();
require('./db/index.js');

const { app } = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
