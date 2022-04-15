'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Smith',
        username: 'JSmith',
        email: 'jsmith@hotmail.com',
        password: '12345',
        image: 'https://media.npr.org/assets/img/2021/10/19/kanyewest_wide-96a94105571576fccf8dac36615998c2ddf87634.jpg?s=1400',
       
        created_at: new Date(),
        updated_at: new Date()

      }
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
