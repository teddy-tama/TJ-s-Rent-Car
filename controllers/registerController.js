const { User } = require('../models/index.js')

module.exports = class Controller {
    static getRegister(req, res) {
        res.render('registerPage')
    }

    static postRegister(req, res) {
        console.log(req.body);
        let { first_name, last_name, phone, email, password } = req.body
        User.create({ first_name, last_name, phone, email, password })
            .then(data => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }
}