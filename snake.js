function Snake() {
    this.x = 0;
    this.y = 0;
    this.xDirection = 1;
    this.yDirection = 0;
    // Tail length not including the head
    this.total = 0;
    this.tail = [];

    this.direction = function(x,y) {
        this.xDirection = x;
        this.yDirection = y;
    }

    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xDirection*scl;
        this.y = this.y + this.yDirection*scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    this.show = function() {
        stroke(255);
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
}