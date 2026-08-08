
let rectsize = 50

function setup() {
    createCanvas(600, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}

function draw() {
    // rect(width / 2 - rectsize / 2, height / 2 - rectsize / 2, rectsize, rectsize);
}

function keyPressed() {
    // rectsize = 100

    let positionX = random(0, 600)
    let positionY = random(0, 400)
    let size = random(10, 25)
    let numCircle = random(5, 20)
    let randomColour = color(random(255), random(255), random(255));
    for (let i = 0; i < numCircle; i++) {
        fill(randomColour)
        ellipse(positionX, positionY, size, size);
    }

}
function keyReleased() {
    // rectsize = 50
}