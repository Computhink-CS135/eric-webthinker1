
let rectsize = 50
let x = 0

function setup() {
    createCanvas(600, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}

function draw() {
    // rect(width / 2 - rectsize / 2, height / 2 - rectsize / 2, rectsize, rectsize);

    if (keyIsDown(RIGHT_ARROW)) {
        x += 5
    } else if (keyIsDown(LEFT_ARROW)) {
        x -= 5
    }
    circle(width / 2 + x, height / 2, 100)


    // if(keyCode == RIGHT_ARROW) {
    //     x += 1
    // } else if (keyCode == LEFT_ARROW) {
    //     x -= 1
    // }
    // circle(width / 2 + x, height / 2, 100)
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

    // if (key === 'r') {
    //     fill(255, 0, 0);
    //     circle(300, 200, 200);
    // } else if (key === 'w') {
    //     fill(255, 255, 255);
    //     circle(300, 200, 200);
    // } else if (key === 'g') {
    //     fill(0, 255, 0);
    //     circle(300, 200, 200)
    // } else if (key === 'b') {
    //     fill(0, 0, 255);
    //     circle(300, 200, 200)
    // } else {
    //     fill(255, 255, 0)
    //     circle(300, 200, 200)
    // }

}
function keyReleased() {
    // rectsize = 50

    // createCanvas(600, 400);
    // background(225);
}

function mouseMoved() {
    // if (mouseX < 100) {
    //     fill(255, 0, 0)
    // } else if (mouseX >= 100 && mouseX < 200) {
    //     fill(255, 255, 0)
    // } else if (mouseX >= 200 && mouseX < 300) {
    //     fill(0, 255, 0)
    // } else if (mouseX >= 300 && mouseX < 400) {
    //     fill(0, 0, 255)
    // } else if (mouseX >= 400 && mouseX < 500) {
    //     fill(255, 0, 255)
    // } else if (mouseX >= 500 && mouseX < 600) {
    //     fill(255, 0, 220)
    // }
    // circle(300, 200, 200)
}