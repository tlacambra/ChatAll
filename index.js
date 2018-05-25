var app = require('express')();
var http = require('http').Server(app);
var twig = require('twig');
var io = require('socket.io')(http);

// app.set ...
app.set("views", __dirname + "/views")
app.set("view engine", "twig");

app.get('/', function(req, res){
  res.render('home');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});