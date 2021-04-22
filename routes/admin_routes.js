const express = require('express');
const router = express.Router();

const Controller = require('../controllers/admin_controller');

router.get('/', Controller.getAll);
router.get('/:id', Controller.getRentals);

module.exports = router;
