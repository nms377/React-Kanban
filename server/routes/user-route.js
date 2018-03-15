const express = require('express');
const db = require('../models');
const { User } = db;
const bcrypt = require('bcrypt');

const saltRounds = 10; // defaults to 10
const passport = require('passport');

const app = express();
const router = express.Router();

router.route('/')
	.get((req,res) => {
		res.send('Hello World');
		// res.render('user/new');
	})

router.route('/new')
	.get((req, res) => {
		res.send('Create a user on this page');
	})
	.post((req, res) => {
		req.params.username;
		req.params.password;

		console.log('test', req.params.username);

		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(req.body.password, salt, function(err, hash) {
				User.create({
					username: req.body.username,
					password: hash
				})
				.then ( _ => {
					console.log(req.params.username, req.params.password);
					res.redirect('login');
				});
			});
		});
	});

router.route('/login')
	.get((req, res) => {
		res.send(req.user);
	})
	.post(passport.authenticate('local'), function(req,res){
    User.find({
      where: {
        username: req.body.username
      }
    })
    .then(result => {
      res.send({
        id:result.dataValues.id,
        email:result.dataValues.email
    });

    })
    .catch(err => {
      console.log('error',err);
    });
  });

function isAuthenticated(req,res, next) {
	console.log('running is authenticated');
	if (req.isAuthenticated()) {
		console.log('passed');
		next();
	} else {
		console.log('NOPE');
		res.redirect('login');
	}
}

router.get('/profile', isAuthenticated, (req,res) => {
	console.log('secret', req.user);
	res.send('Hello', req.user);
});

router.route('/logout')
	.get((req, res) => {
		console.log('logged out')
		req.logout();
		res.redirect('/api/user/login');
	});

module.exports = router;