const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bp = require('body-parser');
const cardRoute = require('./routes/card-route');
const userRoute = require('./routes/user-route');
const bcrypt = require('bcrypt');

const PORT = 9000;

const saltRounds = 10; // defaults to 10 regardless

// Password middleware for User auth
const	LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));

// body parser
app.use(bp.urlencoded({
	extended: true
}));

app.use(bp.json({type: 'application/json'}));

// method-override
app.use(methodOverride('_method'));

// cookie-parser
app.use(cookieParser());

// express-session
app.use(session({
	store: new RedisStore(),
	secret: 'letitstand',
	resave: true,
	saveUninitialized: true
}));

app.use(session({
	secret: 'letitstand'
}));

// this goes after every other middleware
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// models
const db = require('./models');
const { User, Card } = db; // object destructuring

// routes
app.use('/api/board', cardRoute);
app.use('/api/user', userRoute);

// authenticate password
passport.use(new LocalStrategy(
	function (username, password, done, err) {

	User.findOne({
		where: {
			username: username
		}
	}).then( user => {
		if (user === null) {
			// console.log('user failed');
			return done(null, false, {message: 'bad username'});
		} else {
			bcrypt.compare(password, user.password)
			.then(res => {
				if(res){
					// console.log('user logged in');
					return done(null, user);
				} else {
					return done(null, false, {message: 'bad password'});
				}
			});
		}
	})
	.catch((err) => {
		return done('error', err);
	});
}));

// serialize user
passport.serializeUser(function(user,done) {
	return done(null, {
		id: user.id,
		username: user.username
	});
});

// deserialize user
passport.deserializeUser(function(user, done) {

	User.findOne({where: {username: user.username}})
		.then( function(username) {
			return done(null, user);
		})
		.catch( err => {
			console.log('deserialize err', err);
			return done(err, user);
		});
});

// listending on port

app.listen(PORT, (req, res) => {
	console.log('Server started on Port ', PORT);
	db.sequelize.sync();
});

module.exports = app;