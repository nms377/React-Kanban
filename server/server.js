const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./models');
const {User, Card} = db;
const card = require('./routes/card-route');

const PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({
	extended: true
}));



app.listen(PORT, function() {
	console.log('Server started on Port ', PORT);
});

module.exports = app;