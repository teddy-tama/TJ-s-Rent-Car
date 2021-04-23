const { Admin, User, Car } = require('../models');

module.exports = class Controller {
	static getAll(req, res) {
		Admin.findAll()
			.then((data) => {
				res.render('admin_list', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getRentals(req, res) {
		Admin.findOne({
			where: {
				id: req.params.id,
			},
			include: [{ model: User }],
		})
			.then((data) => {
				// console.log(JSON.stringify(data, null, 2));
				res.render('admin_detail', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}
};
