'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
   
    static associate(models) {
      Comment.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'userid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      Comment.belongsTo(models.Post, {
        as: 'posts',
        foreignKey: 'postid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Comment.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false },
    userid: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'users',
        key: 'id'
      }
    } ,
    postid:{
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
  modelName: 'Comment',
  tableName: 'comments',
});
  return Comment;
};