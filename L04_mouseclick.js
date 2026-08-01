let shapecolour = #ff0000

function setup() {
    createCanvas(600, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    fill(shapecolour);
}
function mousePressed() {
    let randomcolour = color(random(0, 255), random(255), random(255));
    fill(randomcolour);
    nostroke();
    circleSize = random(100);
    ellipse(mouseX, mouseY, circleSize, circleSize)
}