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
        this.x = this.x + this.xDirection*scl;
        this.y = this.y + this.yDirection*scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    this.show = function() {
        stroke(255);
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            return true;
        } else {
            return false;
        }
    }
}