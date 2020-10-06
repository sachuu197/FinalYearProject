const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "tasks",
  {
    SN: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    taskname: {
      type: Sequelize.STRING
    },
    allotedTo: {
        type: Sequelize.STRING
    },
    DueDate: {
        type: Sequelize.DATE
    }  
  },
  {
    timestamps: false
  }
);