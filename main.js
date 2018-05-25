var express = require('express'); 
var twig = require('twig');
var bodyParser = require('body-parser')
var app = express(); 

// app.set ...
app.set("views", __dirname + "/views")
app.set("view engine", "twig");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.render('index');
}); 

app.post('/signin', function (req, res) {
	var login = req.body.login;
	var pwd = req.body.pwd;
	if ((login === 'toto') && (pwd === 'tata')){
		res.cookie('login', login);
		res.redirect('/dashboard');
	}
	else{
		res.redirect('/');
	}
}); 
app.get('/signout', function (req, res) {
	res.clearCookie('login', { path: '/dashboard' });
	res.redirect('/');
}); 
app.get('/dashboard', function (req, res) {
		console.log("Got /dashboard");

	res.render('dashboard');
});

var server = app.listen(8081, function () { 
	var host = server.address().address
	var port = server.address().port 
	console.log("App listening at http://%s:%s", host, port); 
})

db.eleves.find(
	{
		$or: [
			{note: {$lte:10}}, {note: {$gte:15}}
		]
	}
).pretty()