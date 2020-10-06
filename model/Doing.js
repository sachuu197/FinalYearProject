const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "doings",
  {
    SN: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Task: {
      type: Sequelize.STRING
    },
    /*Status: {
      type: Sequelize.INTEGER
    },*/
    allotedTo: {
      type: Sequelize.STRING
    },
    StartDate: {
        type: Sequelize.DATE
    },
    DueDate : {
        type: Sequelize.DATE
    }
    },
  {
    timestamps: false
  }
);