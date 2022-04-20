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

      },
      // {
      //   image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      //   description: 'Stumbled across this beautuful lake. OMG look at the fish! Click the link in bio to find out where i am.',
      //   userid: 6,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg',
      //   description: 'Machu Picchu, Peru. Take me back!',
      //   userid: 5,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-rome-italy.jpg',
      //   description: 'Mama Mia! The history here will make your heart explode',
      //   userid: 3,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-maui-hawaii.jpg',
      //   description: `Surfs up! When you're here you're family`,
      //   userid: 3,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-new-zealand.jpg',
      //   description: `LOTR fandom alert `,
      //   userid: 4,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2022/01/world-best-places-to-visit-in-the-world-cambodia-angkor-wat-stone-faces.jpg',
      //   description: `ommmmm! Find your peace!`,
      //   userid: 2,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-london-england.jpg',
      //   description: `The best Fish & Chips ive ever had.`,
      //   userid: 6,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-manhattan-new-york.jpg',
      //   description: `Concrete jungle with the best pizza ive ever had. My neck still hurts from looking up so much at all of the tall buildings. OUCH!`,
      //   userid: 5,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2021/11/best-places-to-visit-in-the-world-colombia-cartagena-walled-city.jpg',
      //   description: `Stayed in the walled city in the most beautiful AirBnb. PPro tip... say no to the beach ceviche!`,
      //   userid: 4,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
      // {
      //   image: 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-paris-france.jpg',
      //   description: `I fell in love... and it was not with the French peoples warm attitudes.`,
      //   userid: 5,
      //   created_at: new Date(),
      //   updated_at: new Date()

      // },
    ],
    {}
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {})
  }
};
