const Sequelize = require("sequelize");
//import mysql2 from 'mysql2'
const mysql2= require('mysql2')
const db = {};
const sequelize = new Sequelize("project", "root1", "Abcde@123", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: "mysql2",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;