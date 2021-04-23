'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		static findCars(obj) {
			return this.findAll(obj);
		}

		static associate(models) {
			// define association here
			Car.belongsTo(models.Admin, { foreignKey: 'AdminId' });
			Car.belongsTo(models.User, { foreignKey: 'UserId' });
		}
	}
	Car.init(
		{
			type: DataTypes.STRING,
			image: DataTypes.STRING,
			detail: DataTypes.STRING,
			price: DataTypes.FLOAT,
			UserId: DataTypes.INTEGER,
			AdminId: DataTypes.INTEGER,
			status: DataTypes.STRING,
		},
		{
			hooks: {
				beforeCreate: (instance, options) => {
					instance.status = 'Tersedia';
				},
			},
			sequelize,
			modelName: 'Car',
		}
	);
	return Car;
};
