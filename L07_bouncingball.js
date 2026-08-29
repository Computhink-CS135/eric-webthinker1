
//  Recap 1
// let picoImage;
// let popSound;
// let x = 0;
// let y = 0;
// let picoWidth = 100;

// function preload() {
//     picoImage = loadImage('assets/pico-a.png');
//     popSound = loadSound('assets/pop.mp3');
// }
// function setup() {
//     createCanvas(600, 400);
// }
// function draw() {
//     background("gray");

//     if (keyIsDown(RIGHT_ARROW)) {
//         x += 5;
//     } else if (keyIsDown(LEFT_ARROW)) {
//         x -= 5;
//     } else if (keyIsDown(DOWN_ARROW)) {
//         y += 5;
//     } else if (keyIsDown(UP_ARROW)) {
//         y -= 5;
//     } 
//     x = constrain(x, 0, width - 100);
//     y = constrain(y, 0, height - 100);
//     createCanvas(600, 400);
//     background("gray");
//     image(picoImage, x, y, picoWidth, 100);
// }
// function keyPressed() {
//     if (keyCode === 32) {
//         popSound.play()
//         picoWidth = 50;

//     }
// }
// function keyReleased() {
//     if (keyCode === 32) {
//         picoWidth = 100;
//     }
// }

let ballX = 300;
let ballY = 200;
let ballsize = 50;

function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(220);
    noS
    circle(ballX, ballY, ballsize);
}