var mysql = require('mysql');

// Run the following by logging into the mysql pod
// ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'redhat'
// FLUSH PRIVILEGES;
// CREATE DATABASE express_winner

var conn = mysql.createConnection({
  host: "mysql-service.default.svc.cluster.local",
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