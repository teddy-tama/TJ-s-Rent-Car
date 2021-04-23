const { User, Admin } = require('../models');

module.exports = class Controller {
	static getAll(req, res) {
		User.findAll().then((data) => {
			res.render('user_list', { data }).catch((err) => {
				res.send(err);
			});
		});
	}

	static getRentals(req, res) {
		User.findOne({
			where: {
				id: req.params.id,
			},
			include: [Admin],
		})
			.then((data) => {
				res.render('user_detail', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}
};
