
let yPos = 0;

function setup() {
    createcanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(255, 255, 0)");
}
function draw() {
    background(220);
    text("asd", width / 2, yPos);
    yPos -= 0.6
}