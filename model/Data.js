const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "datas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CollegeName: {
      type: Sequelize.STRING
    },
    Branch: {
        type: Sequelize.STRING
    },
    ProjectId : {
        type: Sequelize.STRING
    },
    ProjectTitle: {
        type: Sequelize.STRING
    },
    Type : {
        type: Sequelize.STRING
    },
    Status : {
        type: Sequelize.STRING
    },
    Stage: {
        type: Sequelize.STRING
    },
    Faculty: {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);