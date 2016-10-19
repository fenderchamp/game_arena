GameAPI = require('../lib/GameAPI'); 

var game_api = new GameAPI();

exports['new'] = function (test) {
   test.equals(game_api.crabcakes_url,'http://localhost:5000/');
   test.done();
};


//var client=game_api.client;

//var json_data = 'beans';
game_api.call();
//console.log(game_api.game_json);

//console.log(json_data);

/*
var req = client.methods.newGame( function (data,response,silly) {
   console.log('here I am');
   o_data = data;
   console.log(o_data.players[0].crab_cakes[0]);
   o_response = response;
   console.log(response);

}).on('error', function(err) {
   console.log('request busted',err.request.options);
});

client.on('error', function(err) {
   console.log('client busted',errs);
});
*/


/*
exports['newGame'] = function (test) {
   test.equals(o_data,'bob');
   test.equals(o_response,'bob');
   test.done();
};
*/
