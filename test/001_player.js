Player = require('../lib/Player'); 


var player = new Player('bob');

exports['new'] = function (test) {
   test.equals(player.name, 'bob');
   test.equals(player.join_game(), '77798');
   test.done();
};


