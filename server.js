const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json({
	extended: true
}));

app.listen(PORT, function() {
	console.log('Server started on Port ', PORT);
});