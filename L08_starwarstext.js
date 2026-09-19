
let yPos;

function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(255, 255, 0)");

    yPos = height;
}
function draw() {
    background(0);
    text("ur adopted.     made by Eric", width / 2, yPos);
    yPos -= 0.6;
}