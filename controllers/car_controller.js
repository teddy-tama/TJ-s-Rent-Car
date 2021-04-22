const { Car, Admin, User } = require('../models');
const multer = require('multer');
const path = require('path');
const moneyFormatter = require('../helpers/moneyFormatter');

const storage = multer.diskStorage({
	destination: './public/img/',
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	},
});

module.exports = class Controller {
	static getAll(req, res) {
		Car.findAll({
			attributes: ['id', 'type', 'detail', 'image', 'price', 'status', 'UserId', 'AdminId'],
			include: [{ model: Admin }],
		})
			.then((respond) => {
				let data = respond.map((el) => {
					el.price = moneyFormatter(el.price);
					return el;
				});
				res.render('car_list', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getAdd(req, res) {
		Admin.findOne({ where: { id: req.session.dataLogin.AdminId } })
			.then((data) => {
				res.render('car_add', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static addCar(req, res) {
		const upload = multer({
			storage,
		}).single('image');

		upload(req, res, (err) => {
			if (err) {
				res.send(err);
			} else {
				Car.create({
					type: req.body.type,
					detail: req.body.detail,
					image: req.file.filename,
					price: req.body.price,
					AdminId: req.session.dataLogin.AdminId,
				})
					.then(() => {
						res.redirect('/car');
					})
					.catch((err) => {
						res.send(err);
					});
			}
		});
	}

	static getEdit(req, res) {
		Car.findAll({
			attributes: ['id', 'type', 'detail', 'image', 'price', 'status', 'UserId', 'AdminId'],
			where: {
				id: req.params.id,
			},
			include: Admin,
		})
			.then((respond) => {
				let data = respond[0];
				res.render('car_edit', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editCar(req, res) {
		const upload = multer({
			storage,
		}).single('image');

		upload(req, res, (err) => {
			if (err) {
				res.send(err);
			} else {
				let data = {
					type: req.body.type,
					detail: req.body.detail,
					price: +req.body.price,
				};

				req.file ? (data.image = req.file.filename) : '';

				Car.update(data, { where: { id: req.params.id } })
					.then(() => {
						res.redirect('/car');
					})
					.catch((err) => {
						res.send(err);
					});
			}
		});
	}

	static deleteCar(req, res) {
		Car.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then(() => {
				res.redirect('/car');
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getDetail(req, res) {
		Car.findAll({
			attributes: ['id', 'type', 'detail', 'image', 'price', 'status', 'UserId', 'AdminId'],
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Admin,
					required: false,
				},
				{
					model: User,
					required: false,
				},
			],
		})
			.then((respond) => {
				let data = respond[0];
				res.render('car_detail', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static addUser(req, res) {
		Car.update(
			{
				UserId: req.session.dataLogin.AdminId,
				status: 'Telah Disewa',
			},
			{
				where: {
					id: req.params.id,
				},
			}
		)
			.then(() => {
				res.redirect('/car');
			})
			.catch((err) => {
				res.send(err);
			});
	}
};
