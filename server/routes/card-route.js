const server = require('../server');
const express = require('express');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();

// Authentication keeps failing. Will return to this issue at a later time.
// Think I need to authenticate on client side and connect to server auth
// let isAuth = (function isAuthenticated(req,res, next) {
// 	console.log('running is authenticated');
// 	if (req.isAuthenticated()) {
// 		console.log('passed');
// 		next();
// 	} else {
// 		console.log('NOPE');
// 		res.redirect(303, '/api/user/login');
// 	}
// });

router.get('/', (req, res) => {
		console.log('GET', req.params.id);
		Card.findAll()
		.then((cards => {
				res.json(cards);
			}))
			.catch((err) => {
				console.log('err', err);
				res.status(500).send({err});
			});
});

router.route('/new')
	.post((req, res) => {
		console.log('body', req.body);
		return Card.create({
			title: req.body.title,
			priority: req.body.priority,
			status: req.body.status,
			assignedTo: req.body.assignedTo,
			createdBy: req.body.createdBy,
			user: req.body.user
		})
		.then((newTask) => {
			console.log(newTask);
			res.send(newTask);
		})
		.catch((err) => {
			res.send('error', err);
		});
});


router.route('/edit')
	.put((req,res) => {
    Card.update({
      status: req.body.status
    },
      {where: {
        title: req.body.title
      }
    })    
    .then((updated) => {
      res.send(updated);    
    })
    .catch(err => {
      res.send(err);
    });
  })

router.route('/delete')
	.delete((req, res) => {
		Card.destroy({
			where: { 
				title: req.body.title
			}
		})
		.then((removed) => {
			res.redirect('/');
		})
		.catch((err) => {
			console.log('err', err);
			res.send(err);
		});
});

module.exports = router;