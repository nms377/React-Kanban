const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./models');
const cardRoute = require('./routes/card-route');

const PORT = process.env.PORT || 9000;

app.use(bp.urlencoded({
	extended: true
}));

app.use('/api', cardRoute);

app.listen(PORT, (req, res) => {
	console.log('Server started on Port ', PORT);
});

module.exports = app;