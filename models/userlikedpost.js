'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLikedPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserLikedPost.init(
    {
    userid: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    postid: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserLikedPost',
    tableName: 'user_liked_posts'
  });
  return UserLikedPost;
};