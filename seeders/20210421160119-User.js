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
				first_name: faker.name.firstName(),
				last_name: faker.name.lastName(),
				phone: faker.phone.phoneNumber(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('Users', data, {});
	},

	down: (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('Users', null, {});
	},
};
