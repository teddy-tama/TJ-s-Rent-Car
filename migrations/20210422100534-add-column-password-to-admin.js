'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		return queryInterface.addColumn('Admins', 'password', Sequelize.STRING);
	},

	down: (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		return queryInterface.removeColumn('Admins', 'password', Sequelize.STRING);
	},
};
