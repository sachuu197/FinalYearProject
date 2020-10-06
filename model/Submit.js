const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "submits",
  {
    SN: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Task: {
      type: Sequelize.STRING
    },
    StudentName: {
        type: Sequelize.STRING
    },
    /*Status: {
      type: Sequelize.INTEGER
    },*/
    DueDate: {
        type: Sequelize.DATE
    },
    StartDate: {
      type: Sequelize.DATE
  },
    TaskDetails: {
        type: Sequelize.STRING
    },
    Challenges : {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);