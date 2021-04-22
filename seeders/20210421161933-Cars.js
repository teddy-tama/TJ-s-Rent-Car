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
				type: `${faker.vehicle.vehicle()} ${faker.vehicle.manufacturer()}`,
				detail: `${faker.vehicle.color()} ${faker.vehicle.model()} ${faker.vehicle.type()}`,
				image: faker.image.imageUrl(),
				price: faker.commerce.price(),
				AdminId: faker.random.arrayElement([1, 2, 3, 4, 5]),
				status: faker.random.arrayElement(['Tersedia', 'Telah Disewa']),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('Cars', data, {});
	},

	down: (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('Cars', null, {});
	},
};
