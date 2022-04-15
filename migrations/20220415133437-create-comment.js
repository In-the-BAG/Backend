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
      userId: {
        type: Sequelize.INTEGER,
        feild: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }  
      },
      postId: {
        type: Sequelize.INTEGER,
        feild: 'postId',
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