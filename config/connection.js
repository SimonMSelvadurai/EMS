const mysql = require("mysql2");

require("dotenv").config();

const connection = mysql.createConnection(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  //process.env.DB_PASSWORD,
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    //database: "employee_db",
    database: process.env.DB_NAME,
  }
);

module.exports = connection;
