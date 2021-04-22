const express = require('express');
const router = express.Router();

const user = require('./user_routes');
const admin = require('./admin_routes');
const car = require('./car_routes');

router.get('/', car);
router.use('/user', user);
router.use('/admin', admin);
router.use('/car', car);
router.use(express.static('./public'));

module.exports = router;
