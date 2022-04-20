'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Post, { 
        foreignKey: 'userid',
        as: 'posts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.hasMany(models.Comment, { 
        foreignKey: 'userid',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.belongsTo(models.Post, {
        as: 'userposts',
        foreignKey: 'postid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    bio: DataTypes.STRING,
    postid: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'posts',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};