'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'postid',{
      type:Sequelize.INTEGER
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'postid');
  }
};
