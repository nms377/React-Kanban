const express = require('express');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Card.findAll()
			.then((cards => {
				console.log('this', cards);
				res.json({
					list:
						{cards}
					});
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
		.then((newTask) => {
			console.log(newTask);
			res.redirect(200,'/');
		})
		.catch((err) => {
			res.send('error', err);
		});
});

router.route('/:id')
	.put((req, res) => {
		Card.findById(req.params.id)
			.then((task) => {
				task.update({
					title: req.body.title,
					priority: req.body.priority,
					status: req.body.status
				})
				.then((task) => {
					res.send('updated successfuly');
				});
			});
	})
	.delete((req, res) => {
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