'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const faker = require('faker');
		faker.locale = 'id_ID';
		let data = [];
		for (let i = 0; i < 10; i++) {
			data.push({
				full_name: faker.name.findName(),
				phone_number: faker.phone.phoneNumber(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('Admins', data, {});
	},

	down: (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('Admins', null, {});
	},
};
