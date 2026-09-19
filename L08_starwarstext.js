
let yPos;
let textA = ["ur adopted", "credits:", "Eric #1", "Eric #2", "Eric #3"]

function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(255, 255, 0)");

    yPos = height;
}
function draw() {
    background(0);
    for (let i = 0; i < text.length; i++) {
        text(textA[i], 50, yPos + i * 50);
    }
    yPos -= 0.5;
}