const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Code extends Model {}

Code.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    initID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        },
    },
    receiveID: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'code',
  }
);

module.exports = Code;

// friend_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: "user",
//     key: "id",
//     unique: false,
//   },
// }