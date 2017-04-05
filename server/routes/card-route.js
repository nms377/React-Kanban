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
      status: req.body.status
    },
      {where: {
        title: req.body.title
      }
    })    
    .then((udpate) => {
          res.send(update);    
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
			if(removed >= 200 && removed < 600){
			res.send(removed);
			}
		})
		.catch((err) => {
			console.log('err', err);
			res.send(err);
		});
});

module.exports = router;