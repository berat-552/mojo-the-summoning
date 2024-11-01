const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  DataTypes,
  sequelize,
  Model,
};
