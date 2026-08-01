let shapecolour = "#ff0000"

function setup() {
    createCanvas(600, 400);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    fill(shapecolour);
}
function mousePressed() {
    let randomcolour = color(random(255), random(255), random(255));
    fill(randomcolour);
    noStroke();
    ellipse(200, 200, 80, 80)
}
function mouseReleased() {
    shapecolour = "#ffffff"
}