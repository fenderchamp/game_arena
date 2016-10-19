Game = require('../lib/Game'); 

var game = new Game();

exports['new'] = function (test) {
   test.equals(game.json, 'bob');
//   test.throws(function ()  { var p = new Player()});
   test.done();
};

