var http = require('http');

function GameAPI() {

   this.crabcakes_host='localhost';
   this.crabcakes_port='5000';

   this.new_two_player_game = function() { this.get('new_game'); };
   this.new_three_player_game = function() {  this.get('new_three_player_game'; };

   this.options = function(method,path) {

       return {
           hostname: this.crabcakes_host,
           port: this.crabcakes_port,
           path: path,
           method: method,
           headers: {
             'Content-Type': 'application/json',
             //'Content-Length': Buffer.byteLength(postData)
           }
        };
   };

   this.get = function(path) {
       var options=this.options( 'Get', path h);
       var req = http.request(options, function (res) {
           var output = '';
           console.log(`STATUS: ${res.statusCode}`);
           console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
           res.setEncoding('utf8');
           res.on('data', function(chunk) {
               output+=chunk;
           });
           res.on('end', function() {
               var obj = JSON.parse(output);
               onResult(res.statusCode, obj);
           });
      });
      req.on('error', function(e) {
          console.log(`problem with request: ${e.message}`);
      });

       // write data to request body
      req.write(postData);
      req.end();
   };

}

module.exports = GameAPI;


/*
#get '/new_game' => sub {
#get '/new_three_player_game' => sub {
#post '/move_crabcake/:player/:crabcake/:card' => sub {
#post '/set_player_ready/:player' => sub {
#post '/draw_card/:player' => sub {
#post '/play_card/:player/:card' => sub {
#post '/pickup_discards/:player' => sub {
#post '/finish_turn/:player' => sub {
*/






