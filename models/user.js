'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		getFullName() {
			return `${this.first_name} ${this.last_name}`;
		}

		static associate(models) {
			// define association here
			User.belongsToMany(models.Admin, { through: models.Car });
			User.hasMany(models.Car, { foreignKey: 'UserId' });
		}
	}
	User.init(
		{
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			phone: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
