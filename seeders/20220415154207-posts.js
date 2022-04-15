'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        image: 'https://media.npr.org/assets/img/2021/10/19/kanyewest_wide-96a94105571576fccf8dac36615998c2ddf87634.jpg?s=1400',
        description: 'this is a test',
        userid: 1,
        created_at: new Date(),
        updated_at: new Date()

      }
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {})
  }
};
