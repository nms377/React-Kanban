const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bp = require('body-parser');
const db = require('./models');
const cardRoute = require('./routes/card-route');

const PORT = 9000;

app.use(express.static('public'));

app.use(bp.urlencoded({
	extended: true
}));

app.use(bp.json({type: 'application/json'}));

app.use(methodOverride('_method'));

app.use('/api/board', cardRoute);

app.listen(PORT, (req, res) => {
	console.log('Server started on Port ', PORT);
});

module.exports = app;