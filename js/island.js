function island () {
}
island.prototype = Object.create(item.prototype);
island.prototype.type = 'island';
island.prototype.init = function () {
    this.setDimension(game.cellWidth, game.cellHeight, false);
    this.fillColor = 'brown';
    this.lineColor = 'green';
    this.context = game.canvas.playerContext;
    this.canvas = game.canvas.player;
    this.setLocation(0, 0);
}