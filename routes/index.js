const express = require('express');
const router = express.Router();

const isLogin = require('../middlewares/isLogin.js');
const user = require('./user_routes');
const admin = require('./admin_routes');
const car = require('./car_routes');
const loginRouter = require('./loginRouter.js');
const registerRouter = require('./registerRouter.js')

router.use('/', loginRouter);
router.use('/', registerRouter);
router.get('/', isLogin, car);
router.use('/user', isLogin, user);
router.use('/admin', isLogin, admin);
router.use('/car', isLogin, car);
router.use(express.static('./public'));

module.exports = router;
