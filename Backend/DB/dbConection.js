const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "loginsystem",
});

/* const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("loginsystem", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
 */
module.exports = db;
/* module.exports = sequelize; */
