
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

    let positionX = random(600)
    let positionY = random(400)
    let size = (50, 100)
    let numCircle = (5, 20)
    for (let i = 0; i < numCircle; i++) {
        circle(size, positionX, positionY);
        
    }

}
function keyReleased() {
    // rectsize = 50
}