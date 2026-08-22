
let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    } else if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    } else if (keyIsDown(UP_ARROW)) {
        y -= 5;
    } else if (keyIsDown("SPACE_BAR")) {
        fill(255, 0, 255);
    }
    x = constrain(x, 0, width + 100)
    y = constrain(y, 0, height + 100)
    x = constrain(x, 0, width - 100)
    y = constrain(y, 0, height - 100)


    createCanvas(400, 400);
    background(225);
    rect(x, y, 50, 50);
}