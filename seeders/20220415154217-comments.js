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
      },
      {
        description: 'Wow amazing pic!!',
        userid: 5,
        postid: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      //   {
      //   description: 'OMG tell me more!',
      //   userid: 4,
      //   postid: 6,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   description: 'I hear the food there is amazing!',
      //   userid: 5,
      //   postid: 7,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   description: 'Ive always wanted to go!!',
      //   userid: 3,
      //   postid: 2,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   description: 'This is where im trying to be!',
      //   userid: 5,
      //   postid: 7,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   description: 'I LOVE NY',
      //   userid: 5,
      //   postid: 6,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
