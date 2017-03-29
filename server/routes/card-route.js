const express = require('express');
const db = require('../models');
const { Card } = db;

const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		Card.findAll({order: 'id ASC'})
			.then((cards => {
				res.json(cards);
			}))
			.catch((err) => {
				console.log('err', err);
				res.send('error', err);
			});
})

router.route('/new')
	.post((req, res) => {
		Card.create({
			title: req.body.title,
			priority: req.body.priority,
			status: req.body.status,
			assignedTo: req.body.assignedTo
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
      priority: req.body.priority,
      status: req.body.status,
      title: req.body.title,
      assignedTo: req.body.assignedTo
    },
      {where: {
        title: req.body.title
      }
    })    
    .then(() => {
      Card.findById(req.params.id)
        .then(card => {
          res.send(card);
        });
      
    })
    .catch(err => {
      res.send(err);
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