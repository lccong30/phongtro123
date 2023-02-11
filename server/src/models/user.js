'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'users' });
      User.belongsTo(models.Role, { targetKey: 'code', foreignKey: 'roleCode', as: 'roleData' })
      User.belongsTo(models.Position, { targetKey: 'code', foreignKey: 'positionCode', as: 'positionData' })
      // User.hasMany(models.PostLike, { foreignKey: 'userId', as: 'users' });

    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    fbUrl: DataTypes.STRING,
    roleCode: DataTypes.STRING,
    positionCode: DataTypes.STRING,
    avatar: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};