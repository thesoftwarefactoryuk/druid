var Mob = require('./mob'); 

var Player = function() {
    Mob.call(this, 0, 0);
};

Player.prototype = Object.create(Mob.prototype);
Player.prototype.constructor = Player;

module.exports = Player;