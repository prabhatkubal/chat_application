"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      // Define association with Member model
      Group.hasMany(models.Member, { foreignKey: "groupId" });

      // Define association with GroupMessage model
      Group.hasMany(models.GroupMessage, { foreignKey: "groupId" });
    }
  }
  Group.init(
    {
      groupId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      groupName: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Group",
      tableName: "groups",
      timestamps: true,
      updatedAt: "updatedAt",
    }
  );
  return Group;
};
