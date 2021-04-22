const { Car, Admin } = require('../models');
const multer = require('multer');
const upload = multer({ dest: `${process.cwd()}/public/img` });

module.exports = class Controller {
	static getAll(req, res) {
		Car.findAll({
			include: [{ model: Admin }],
		})
			.then((data) => {
				res.render('car_list', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getAdd(req, res) {
		Admin.findAll({ order: [['full_name', 'ASC']] })
			.then((data) => {
				res.render('car_add', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static addCar(req, res) {
		upload
			.single('image')
			.then(() => {
				return Car.create({
					type: req.body.type,
					detail: req.body.detail,
					image: file.name,
					price: req.files.price,
					AdminId: 1, ///<----- id dari session
				});
			})
			.then(() => {
				res.redirect('/car');
			})
			.catch((err) => {
				console.log(err);
				res.send(err);
			});
	}

	static getEdit(req, res) {}

	static editCar(req, res) {}

	static deleteCar(req, res) {}
};
