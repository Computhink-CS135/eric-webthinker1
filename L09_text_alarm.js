
function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(255, 255, 0)");
}
function draw() {
    background(0);
    for (let i = 0; i < text.length; i++) {
        text(textA[i], width / 4, yPos + i * 50);
    }
    yPos -= 0.5;
}