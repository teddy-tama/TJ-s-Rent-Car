const express = require('express');
const router = express.Router();

const Controller = require('../controllers/car_controller');

router.get('/', Controller.getAll);
router.get('/add', Controller.getAdd);
router.post('/add', Controller.addCar);
router.get('/edit/:id', Controller.getEdit);
router.post('/edit/:id', Controller.editCar);
router.get('/delete/:id', Controller.deleteCar);

module.exports = router;
