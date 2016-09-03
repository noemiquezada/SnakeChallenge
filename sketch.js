var s;

function setup() {
    createCanvas(600,600);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
    s.show();
}

function keyPressed() {
    // Canvas top-left is (0,0)
    // and bottom-right is (width-1, height-1)
    switch(keyCode) {
        case UP_ARROW:
            s.direction(0, -1);
            break;
        case DOWN_ARROW:
            s.direction(0, 1);
            break;
        case LEFT_ARROW:
            s.direction(-1, 0);
            break;
        case RIGHT_ARROW:
            s.direction(1, 0);
            break;
        default:
            break;
    }
}