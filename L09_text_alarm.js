
function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(150, 0, 255)");
    background(220)
}
function draw() {

    hour = hour();
    min = minute();
    sec = second();

    text(hour, width / 2, height / 2);
    text(min, width / 2 , height / 2 + 50);
    text(sec, width / 2, height / 2 + 100);
}