var _ = require("underscore");

var View = function(game, $el) {
  this.game = game;
  this.$el = $el;
  this.$el.addClass('hanoi');
  this.setupTowers();
  // this.bindEvents();
};

View.prototype.setupTowers = function() {
  var view = this;
  _.times(3, function(i) {
    var $tower = $('<ul>').data('id', i).addClass('tower');
    $tower.append($('<li>').data('id', 0).addClass('slot').addClass('no-disk'));
    $tower.append($('<li>').data('id', 1).addClass('slot').addClass('no-disk'));
    $tower.append($('<li>').data('id', 2).addClass('slot').addClass('no-disk'));
    view.$el.append($tower);
  });

  var $first_tower = this.$el.find('.tower').eq(0);
  $first_tower.find('.slot').eq(2).removeClass('no-disk').addClass('disk-3');
  $first_tower.find('.slot').eq(1).removeClass('no-disk').addClass('disk-2');
  $first_tower.find('.slot').eq(0).removeClass('no-disk').addClass('disk-1');
};

module.exports = View;
