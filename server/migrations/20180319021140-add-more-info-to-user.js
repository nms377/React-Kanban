'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('Users', 'email', Sequelize.STRING);
    queryInterface.addColumn('Users', 'first_name', Sequelize.STRING);
    queryInterface.addColumn('Users', 'last_name', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('Users', 'email');
    queryInterface.removeColumn('Users', 'first_name');
    queryInterface.removeColumn('Users', 'last_name');
  }
};
