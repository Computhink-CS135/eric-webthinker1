
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

    // let numCircle = random(5, 20)
    // for (let i = 0; i < numCircle; i++) {
    //     let randomColour = color(random(255), random(255), random(255));
    //     let positionX = random(0, 600)
    //     let positionY = random(0, 400)
    //     let size = random(10, 25)
    //     fill(randomColour)
    //     ellipse(positionX, positionY, size, size);
    // }


    // if (keyCode === 49) {
    //     circle(300, 200, 200)
    // }
    // if (keyCode === 48) {
    //     quad(400,100, 400,300, 200,300, 200,100) 
    // }

    if (key === 'r') {
        fill(255, 0, 0);
        circle(300, 200, 200);
    } else if (key === 'w') {
        fill(255, 255, 255);
        circle(300, 200, 200);
    } else if (key === 'g') {
        fill(0, 255, 0);
        circle(300, 200, 200)
    } else if (key === 'b') {
        fill(0, 0, 255);
        circle(300, 200, 200)
    } else {
        fill(255, 255, 0)
        circle(300, 200, 200)
    }

}
function keyReleased() {
    // rectsize = 50

    createCanvas(600, 400);
    background(225);
}

function mouseMoved() {
    if (mouseX < 100) {
        fill(255, 0, 0)
    } else if (100 < mouseX < 200) {
        fill(0, 255, 0)
    } else if (200 < mouseX < 300) {
        fill(255, 255, 0)
    } else {
        fill(0, 0, 255)
    }
    circle(300, 200, 200)
}