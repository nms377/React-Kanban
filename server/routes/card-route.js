const server = require('../server');
const express = require('express');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();



router.route('/')
	.get((req, res) => {
		Card.findAll()
			.then((cards => {
				res.send('sanity');
			}))
			.catch((err) => {
				console.log('err', err);
				res.send('error', err);
			});
})

module.exports = router;