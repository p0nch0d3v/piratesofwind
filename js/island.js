function island () {
}
island.prototype = Object.create(item.prototype);
island.prototype.type = 'island';
island.prototype.init = function () {
    this.context = game.canvas.playerContext;
}