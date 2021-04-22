'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		return queryInterface.addColumn('Cars', 'AdminId', {
			type: Sequelize.INTEGER,
			references: {
				model: {
					tableName: 'Admins',
				},
				key: 'id',
			},
			allowNull: true,
		});
	},

	down: (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		return queryInterface.removeColumn('Cars', 'AdminId', {});
	},
};
