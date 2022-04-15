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
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      Post.hasMany(models.Comment, {
        as: 'comment',
        foreignKey: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
      field: 'user_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'users',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};