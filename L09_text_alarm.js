
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

    timeString

    background(220)

    text(hour, width / 2, height / 2);
    text(" :", width / 2 + 25, height / 2);
    text(min, width / 2 + 50, height / 2);
    text(" :", width / 2  + 75, height / 2);
    text(sec, width / 2 + 100, height / 2);
}