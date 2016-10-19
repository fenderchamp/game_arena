var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000 );

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('Not Found');
});

app.listen(app.get('port'), function(){
   console.log( 'Started on http://localhost:' + app.get('port') );
});

mongoose.connect("mongodb://localhost/crabcakes");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});





//post.new_game
//join_game
//move_crabcake
//player_ready
//start_turn
//play_card
//finish_turn



