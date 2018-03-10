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
		res.send('Login here');
	})
	.post(passport.authenticate('local', {
		successRedirect: 'profile',
		failureRedirect: 'login'
	}));

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

router.route('logout')
	.get((req, res) => {
		console.log(req.user.username, 'successfully logged out');
		req.logout();
		res.redirext('login');
	});

module.exports = router;