const config = require('../config.json')
const mysql = require('mysql')

const db_config = config.DATABASE
config.connectionLimit = 10;
const connection = mysql.createPool(db_config);

function getPatients(req, res) {
  const query = `
    SELECT *
    FROM Patient;
  `;

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });

}

module.exports = {
  getPatients
}
