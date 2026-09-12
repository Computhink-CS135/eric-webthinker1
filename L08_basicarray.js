
// recap 1
let squareX = 0
let squareY = 0 
function setup() {
    new Canvas(600, 400);
    background(220);
}
function draw() {
    squareX += 5;
    fill(255, 0, 255);
    rect(squareX, squareY, 100, 100);
}