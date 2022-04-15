'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        description: 'this is a test comment',
        userId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
