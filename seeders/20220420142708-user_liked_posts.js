'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_liked_posts', [
      {
        userid: 1,
        postid: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        userid: 5,
        postid: 6,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_liked_posts', null, {})
  }
};

