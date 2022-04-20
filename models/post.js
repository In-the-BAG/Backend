'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'userid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      Post.hasMany(models.Comment, {
        as: 'comment',
        foreignKey: 'postid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      Post.hasMany(models.User, { 
        foreignKey: 'postid',
        as: 'posts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      
    }
  }
  Post.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false },
    description: DataTypes.STRING,
    userid: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'users',
        key: 'id'
      }
    } ,
    likes: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};