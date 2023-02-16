const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Current extends Model {}

Current.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    currentNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'current',
  }
);
//await sequelize.sync();
//const currentUser = Current.create({current_number: 1});
module.exports = Current;

