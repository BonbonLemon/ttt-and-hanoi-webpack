var View = require('./hanoi-view');
var Game = require('../../hanoi-core-solution/src/game');

$(function () {
  var $rootEl = $('#hanoi');
  new View(new Game(), $rootEl);
});
