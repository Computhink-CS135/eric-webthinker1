
// recap 1
let squareX = 0
let squareY = 0
let squarespeedX = 5
let squarespeedY = 5
function setup() {
    createCanvas(600, 400);
    background(220);
}
function draw() {
    squareX += squarespeedX;
    squareY += squarespeed;
    if (squareX + 100 > width || squareX < 0) {
        squarespeedX *= -1
    } if (squareY + 100 > height || squareX < 0) {
        squarespeed *= -1
    }
    fill(255, 0, 255);
    rect(squareX, squareY, 100, 100);
}