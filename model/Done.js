const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "dones",
  {
    SN: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Task: {
      type: Sequelize.STRING
    },
    StartDate: {
        type: Sequelize.DATE
    },
    ApprovedDate : {
        type: Sequelize.DATE
    },
    Status : {
        type:Sequelize.INTEGER
    }
    },
  {
    timestamps: false
  }
);