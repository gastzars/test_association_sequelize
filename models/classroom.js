"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClassRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Teacher, { foreignKey: "teacher_id" });
      this.belongsToMany(models.Student, { through: models.ClassRoomStudent });
      // define association here
    }
  }
  ClassRoom.init(
    {
      name: DataTypes.STRING,
      teacher_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "ClassRoom",
      tableName: "ClassRooms",
      underscored: true
    }
  );
  return ClassRoom;
};
