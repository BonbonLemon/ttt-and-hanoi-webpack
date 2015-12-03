var _ = require("underscore");

var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.numSquares = 0;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on('click', '.square', this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  var $square = $(e.currentTarget);
  var id = $square.data('id');
  var row = Math.floor(id / 3);
  var col = id % 3;
  try {
    var currentPlayer = this.game.currentPlayer;
    this.game.playMove([row, col]);
    var $gamemark = $("<span>").addClass('game-mark').append(currentPlayer);
    $square.append($gamemark);
    if (this.game.isOver()) {
      if (this.game.winner()) {
        alert("Congeratulations!  The winner is " + currentPlayer);
      } else {
        alert("Cat's Game!");
      }
    }
  }

  catch(err) {
    alert("That move was invalid");
  }
};

View.prototype.setupBoard = function () {
  _.times(3, this.addRow.bind(this));
},

View.prototype.addRow = function() {
  var $row = $('<ul>').addClass('row');
  var view = this;
  _.times(3, function(){
    var $square = $("<li>").addClass('square').data('id', view.numSquares);
    view.numSquares += 1;
    $row.append($square);
  });
  this.$el.append($row);
};

module.exports = View;
