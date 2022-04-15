'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER,
        feild: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }  
      },
      postid: {
        type: Sequelize.INTEGER,
        feild: 'post_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'posts',
          key: 'id'
        }  
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};