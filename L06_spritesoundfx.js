
let x = 0;
let y = 0;

function setup() {
    createCanvas(400, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    // rect(width / 2 - rectsize / 2, height / 2 - rectsize / 2, rectsize, rectsize);
    circle(width / 2 + x, height / 2, 50);
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    } else if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        y -= 5;
    } else if (keyIsDown(UP_ARROW)) {
        y += 5;
    }

    if (x < 25) {
        x = 25;
    } if (x > height - 25) {
        x = height - 25;
    }
}