'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      }),
      Post.belongsTo(models.Post, {
        as: 'posts',
        foreignKey: 'postId',
      })
    }
  }
  Comment.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'users',
        key: 'id'
      }
    } ,
    postId:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'posts',
        key: 'id'
      }
  }, 
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
  });
  return Comment;
};