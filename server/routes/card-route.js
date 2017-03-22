const express = require('express');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Card.findAll()
			.then((cards => {
				res.json({
					list:
						{cards}
					});
				// res.send('sanity');
			}))
			.catch((err) => {
				console.log('err', err);
				res.send('error', err);
			});
})
	.post((req, res) => {
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

router.route('/:id')
	.delete((req, res) => {
		console.log('id: ', req.params.id);
		Card.destroy({
			where: { id: `${req.params.id}`}
		})
		.then((removed) => {
			res.send('sucessfully deleted');
		})
		.catch((err) => {
			console.log('err', err);
			res.send('error', err);
		});
});

module.exports = router;