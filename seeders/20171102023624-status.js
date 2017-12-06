'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('statuses', [{
      title: 'To Do',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Doing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
