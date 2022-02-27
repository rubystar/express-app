const mydb = require('../db/mysql');
const con = mydb.getDbConn();

const participantRepo = {}

participantRepo.getParticipantById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM participants WHERE ( id='" + id + "')";

    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

participantRepo.getAllParticipants = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM participants";

    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

participantRepo.createParticipant = (name) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO participants (name) VALUES ('" + name +"')";

    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

participantRepo.deleteParticipantById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM participants WHERE ( id='" + id + "')";

    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result)
    });
  })
}

module.exports = participantRepo;