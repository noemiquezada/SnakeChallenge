var s;
var scl = 20;
var food;

function setup() {
    createCanvas(600,600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    
    if (s.eat(food)) {
        console.log("I ate the food");
        pickLocation();
    }

    s.death();
    s.update();
    s.show();
    
    stroke(255, 0, 100);
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
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