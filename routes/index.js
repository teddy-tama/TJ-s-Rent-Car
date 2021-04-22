const express = require('express');
const router = express.Router();
const path = require('path');

const user = require('./user_routes');
const admin = require('./admin_routes');
const car = require('./car_routes');

router.get('/', express.static(path.join(__dirname, './public')));
router.get('/', car);
router.use('/user', user);
router.use('/admin', admin);
router.use('/car', car);

module.exports = router;
