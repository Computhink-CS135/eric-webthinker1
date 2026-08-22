
let x = 0;
let y = 0;

function setup() {
    createCanvas(400, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    rect(width / 2 - 50 / 2, height / 2 - 50 / 2, 50, 50);
    
    // if (keyIsDown(RIGHT_ARROW)) {
    //     x += 5;
    // } else if (keyIsDown(LEFT_ARROW)) {
    //     x -= 5;
    // } else if (keyIsDown(DOWN_ARROW)) {
    //     y += 5;
    // } else if (keyIsDown(UP_ARROW)) {
    //     y -= 5;
    // }
    x = constrain(y, 0, height)
    y = constrain(y, 0, height)

    // circle(width / 2 + x, height / 2 + y, 50);
}