const server = require('../server');
const express = require('express');
const bp = require('body-parser');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Card.findAll()
			.then((cards => {
				res.json({cards});
				// res.send('sanity');
			}))
			.catch((err) => {
				console.log('err', err);
				res.send('error', err);
			});
})
	.post((req, res) => {
		console.log('req', req.body.title);
		Card.create({
			title: req.body.title,
			priority: req.body.priority,
			status: req.body.status
		})
		.then((created) => {
			console.log(created);
			res.send('success');
		})
		.catch((err) => {
			res.send('error', err);
		});
});

module.exports = router;