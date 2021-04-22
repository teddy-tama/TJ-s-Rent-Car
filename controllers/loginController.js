const { Admin, User } = require('../models/index.js');

module.exports = class Controller {
	static getLogin(req, res) {
		// console.log('di controller login');
		res.render('loginPage');
	}

	static postLogin(req, res) {
		let { email, password } = req.body;
		// console.log(req.session);
		req.session.isLogin = true;
		Admin.findAll({
			include: User,
		})
			.then((data) => {
				// console.log(JSON.stringify(data, null, 2));
				// console.log(JSON.stringify(data[0], null, 2));
				data.forEach((el) => {
					if (el.email === email && el.password === password) {
						req.session.dataLogin = {
							AdminId: el.id,
							role: 'Admin',
						};
						console.log(req.session);
						res.redirect('/car');
					} else {
						el.Users.forEach((e) => {
							if (e.email === email && e.password === password) {
								req.session.dataLogin = {
									UserId: e.id,
									role: 'User',
								};
								console.log(req.session);
								res.redirect('/car');
							}
						});
					}
				});
			})
			.catch((err) => {
				console.log(err);
				res.send(err);
			});
	}

	static getLogout(req, res) {
		req.session.destroy();
		res.redirect('/login');
	}
};
