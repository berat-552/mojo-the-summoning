const { sequelize, DataTypes, Model } = require("../db/config.js");

class Attack extends Model {}

Attack.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mojoCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    staminaCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Attack",
  }
);

module.exports = Attack;
