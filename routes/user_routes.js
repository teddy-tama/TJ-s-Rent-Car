const express = require('express');
const router = express.Router();

const Controller = require('../controllers/user_controller');

router.get('/', Controller.getAll);
router.get('/:id', Controller.getRentals);

module.exports = router;
