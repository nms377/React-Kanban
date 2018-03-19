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
	.post(function (req, res) {
		console.log('Body', req.body);
		if (req.body.name !== '' && req.body.username !== '' && req.body.password !== '') {

			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(req.body.password, salt, function(err, hash) {
					User.create({
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						email: req.body.email,
						username: req.body.username,
						password: hash
					})
					.then ( (users) => {
						console.log('Server User: ', users);
						res.send(users);
					});
				});
			});
		}	 else {
			console.log('All fields required');
		}
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
    	console.log('result ', result);
      res.send(result);
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