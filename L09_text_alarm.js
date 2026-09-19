
function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(150, 0, 255)");
}
function draw() {
    hour = hour();
    min = minute();
    sec = second();

    text(hour, width / 2)
}