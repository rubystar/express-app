const mydb = require('../db/mysql');
const con = mydb.getDbConn();

const dbSetup = {}

dbSetup.createParticipantsTable = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "CREATE TABLE IF NOT EXISTS participants ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, winner boolean DEFAULT false)";

    con.query(sql, function (err, result) {
      if (err) reject(err);
      console.log("created the table if not exist");
      resolve(result);
    });
  })
}

module.exports = dbSetup;