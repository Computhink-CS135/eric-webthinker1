let shapecolour = #ff0000

function setup() {
    createCanvas(600, 400);
    background(220);
//   noLoop(); // Stops continuous drawing
}
function draw() {
    fill(shapecolour);
    ellipse(200, 200, 80, 80);
}
function mousePressed() {
    shapecolour = 
}