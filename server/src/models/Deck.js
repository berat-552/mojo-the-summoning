const { sequelize, DataTypes, Model } = require("../db/config.js");

class Deck extends Model {}

Deck.init(
  {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Deck",
  }
);

module.exports = Deck;
