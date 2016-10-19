var Client = require('node-rest-client').Client;
 
function GameAPI() {

   var crabcakes_host='localhost';
   var crabcakes_port='5000';

   this.crabcakes_url = 'http://' + crabcakes_host + ':' + crabcakes_port + '/';

   client = new Client();
   client.registerMethod("newGame",this.crabcakes_url+'new_game',"GET");
   client.registerMethod("newThreePlayerGame",this.crabcakes_url+'new_three_player_game',"GET");

   this.client = client;
   this.call = function() {
       //this.game_json = game_json;
       this.client.methods.newGame( function (data,response) {

       //console.log(data);
       //console.log(response);
       //   console.log('here I am');
        //  console.log(data.players[0].crab_cakes[0]);
         // game_json=data;
        //  console.log('|'+this.game_json+'|');
          


       }).on('error', function(err) {
          console.log('request busted',err.request.options);
       }).on('response', function(response) {
           console.log('response '+response);
       });
         
       this.client.on('response', function(response) {
           console.log('c-response '+response);
       })
       this.client.on('error', function(err) {
          console.log('client busted',errs);
       });
       console.log('here');


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






