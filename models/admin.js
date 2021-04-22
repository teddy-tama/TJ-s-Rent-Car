'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Admin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Admin.belongsToMany(models.User, { through: 'AdminId' });
			Admin.hasMany(models.Car, { foreignKey: 'AdminId' });
		}
	}
	Admin.init(
		{
			full_name: DataTypes.STRING,
			phone_number: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Admin',
		}
	);
	return Admin;
};
