let shapecolour = "#ff0000"

function setup() {
    createCanvas(600, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    fill(shapecolour);
    ellipse(mouseX, mouseY, 10, 10)
}
function mousePressed() {
    let randomcolour = color(random(255), random(255), random(255));
    fill(randomcolour);
    noStroke();
    ellipse(200, 200, 80, 80)
}
function mouseReleased() {
    fill("#ffffff")
    ellipse(200, 200, 80, 80)
}
function mouseMoved() {
    ellipse(mouseX, mouseY, 10, 10)
}