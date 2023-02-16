const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        },
    },
    a1: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a2: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a3: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a4: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a5: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a6: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a7: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a8: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a9: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a10: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a11: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a12: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a13: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a14: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a15: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a16: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a17: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a18: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a19: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a20: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a21: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a22: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a23: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a24: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    a25: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'answer',
  }
);

module.exports = Answer;

