var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "redhat",
  database: "express_winner",
  insecureAuth: true
});
var mydb = {};
mydb.getDbConn = function(){
  return conn;
}

module.exports = mydb;