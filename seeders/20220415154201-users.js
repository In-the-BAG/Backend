'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      // {
      //   firstname: 'John',
      //   lastname: 'Smith',
      //   username: 'JSmith',
      //   email: 'jsmith@hotmail.com',
      //   password: '12345',
      //   image: 'https://media.npr.org/assets/img/2021/10/19/kanyewest_wide-96a94105571576fccf8dac36615998c2ddf87634.jpg?s=1400',
       
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      {
        firstname: 'Will',
        lastname: 'Smith',
        username: 'The-Fresh-Smith',
        email: 'slaptherock@hotmail.com',
        password: '12345',
        image: 'https://c.files.bbci.co.uk/B17E/production/_123983454_willsmithslap.jpg',
       
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        firstname: 'Ed',
        lastname: 'Eddy',
        username: 'edSquared',
        email: 'edXed@hotmail.com',
        password: '12345',
        image: 'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:62793?quality=0.8&format=jpg&width=1440&height=810&.jpg',
       
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        firstname: 'Gj',
        lastname: 'Haaland',
        username: 'gjlandhaa',
        email: 'gjlandhaa@gmail.com',
        password: '12345',
        image: 'https://pbs.twimg.com/media/FN_gj6uXwAIdmid.png',
       
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        firstname: 'Alex',
        lastname: 'Barbosa',
        username: 'gitmaster99',
        email: 'abarbosa@gmail.com',
        password: '12345',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGFcteng6yjrg/profile-displayphoto-shrink_200_200/0/1645539401572?e=1653523200&v=beta&t=Q1WaQCDfJLtSuQbMEZy3mQlhLsYkOeYSvFQ8swYH4Os',
       
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        firstname: 'Brynner',
        lastname: 'Ventura',
        username: 'BronxB718',
        email: 'brynner@gmail.com',
        password: '12345',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHhOuPncQkyWQ/profile-displayphoto-shrink_200_200/0/1648671351454?e=2147483647&v=beta&t=Tk1KqofMyfV01Citwdl1SzhhLoVpZNQcK8IluuhIPig',
       
        created_at: new Date(),
        updated_at: new Date()

      },
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
