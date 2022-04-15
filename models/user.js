'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Post, { 
        as: 'posts',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.hasMany(models.Comment, { 
        as: 'comments',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
  }
}
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false },
    username: {
      type: DataTypes.STRING,
      allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};