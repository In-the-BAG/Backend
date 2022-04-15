'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Post, { 
        
        foreignKey: 'user_id',
        as: 'posts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.hasMany(models.Comment, { 
        
        foreignKey: 'user_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
  }
}
  User.init({
    firstname: {
      type: DataTypes.STRING,
      allowNull: false },
    lastname: {
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