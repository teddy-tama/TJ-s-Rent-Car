const express = require('express');
const router = express.Router();

const Controller = require('../controllers/admin_controller');

router.get('/', Controller.getAll);
router.get('/:id', Controller.getRentals);
router.get('/:id/add_car', Controller.getAdd);
router.post('/:id/add_car', Controller.addCar);

module.exports = router;
