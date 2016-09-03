function Snake() {
    this.x = 0;
    this.y = 0;
    this.xDirection = 1;
    this.yDirection = 0;

    this.direction = function(x,y) {
        this.xDirection = x;
        this.yDirection = y;
    }

    this.update = function() {
        this.x = this.x + this.xDirection;
        this.y = this.y + this.yDirection;
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}