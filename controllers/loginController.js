const { Admin, User } = require('../models/index.js');

module.exports = class Controller {
	static getLogin(req, res) {
		res.render('loginPage');
	}

	static postLogin(req, res) {
		let { email, password } = req.body;
		req.session.isLogin = true;
		Admin.findAll({
			include: User,
		})
			.then((data) => {
				data.forEach((el) => {
					if (el.email === email && el.password === password) {
						req.session.dataLogin = {
							AdminId: el.id,
							role: 'Admin',
						};
						res.redirect('/car');
					} else {
						el.Users.forEach((e) => {
							if (e.email === email && e.password === password) {
								req.session.dataLogin = {
									UserId: e.id,
									role: 'User',
								};
								res.redirect('/car');
							}
						});
					}
				});
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getLogout(req, res) {
		req.session.destroy();
		res.redirect('/login');
	}
};
