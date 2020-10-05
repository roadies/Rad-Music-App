const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'radma',
});

dbConnection.connect((error) => {
  if (error) {
    console.log(error, 'Not quite there yet, partner');
  } else {
    console.log('Yayyyyy database is connected!');
  }
});

module.exports = dbConnection;
