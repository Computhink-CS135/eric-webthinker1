
let x = 0;
let y = 0;

function setup() {
    createCanvas(400, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
    bgMusic.loop();
}
function draw() {
    
    // if (keyIsDown(RIGHT_ARROW)) {
    //     x += 5;
    // } else if (keyIsDown(LEFT_ARROW)) {
    //     x -= 5;
    // } else if (keyIsDown(DOWN_ARROW)) {
    //     y += 5;
    // } else if (keyIsDown(UP_ARROW)) {
    //     y -= 5;
    // }
    // x = constrain(x, 50, 350)
    // y = constrain(y, 50, 350)
    // x = constrain(x, 0, width - 100)
    // y = constrain(y, 0, height - 100)
    // createCanvas(400, 400);
    // background(225);
    // rect(x, y, 50, 50);

    background("lightblue");
    image(staticImage, 0, 0, 110, 133);
}
function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}
function keyPressed() {
    
}