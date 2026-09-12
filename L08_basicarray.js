
// recap 1
// let squareX = 0;
// let squareY = 0;
// let squarespeedX = 5;
// let squarespeedY = 5;
// function setup() {
//     createCanvas(600, 400);
//     background(220);
// }
// function draw() {
//     squareX += squarespeedX;
//     squareY += squarespeedY;
//     if (squareX + 100 > width || squareX < 0) {
//         squarespeedX *= -1;
//     } if (squareY + 100 > height || squareY < 0) {
//         squarespeedY *= -1;
//     }
//     fill(255, 0, 255);
//     rect(squareX, squareY, 100, 100);
// }

function setup() {
    createCanvas(600, 400);
    background(220);
    textSize(random(1, 100));
    textAlign(CENTER, CENTER);
    text("My name is Eric.", 50, 50);
    text("I am 10 this year.", 50, 100);
    text("My favourite activity is gaming.", 50, 150);
}
// function draw() {

// }