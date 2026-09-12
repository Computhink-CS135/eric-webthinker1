
// recap 1
let squareX = 0
let squareY = 0 
let squarespeed = 5
function setup() {
    createCanvas(600, 400);
    background(220);
}
function draw() {
    squareX += squarespeed;
    // squareY += squarespeed;
    if (squareX > width) {
        squarespeed *= -1
    }
    fill(255, 0, 255);
    rect(squareX, squareY, 100, 100);
}