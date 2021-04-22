const express = require('express');
const app = express();
const router = require('./routes');
const port = 3000;
const session = require('express-session')

app.set('view engine', 'ejs');

app.use(session({
	secret: 'rent car',
	resave: false,
	saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
	console.log(port);
});
