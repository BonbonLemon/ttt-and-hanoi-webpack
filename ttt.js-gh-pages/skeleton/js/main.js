var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  // Your code here
  var $tttElement = $('#ttt');
  new View(new Game(), $tttElement);
});
