const { sequelize, DataTypes, Model } = require("../db/config.js");

class Card extends Model {}

Card.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mojo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stamina: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Card",
  }
);

module.exports = Card;
