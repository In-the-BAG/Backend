'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        description: 'this is a test comment',
        userid: 1,
        postid: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
