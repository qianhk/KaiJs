/**
 * Created by kai on 16/12/17.
 */
function Ball(radius, lineWidth, color) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = '#FF00FF';
    }
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    if (lineWidth === undefined) {
        lineWidth = 0;
    }
    this.lineWidth = lineWidth;
}

Ball.prototype.draw = function (context, fill) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    if (this.lineWidth == 0 || fill) {
        context.fill();
    }
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
};
