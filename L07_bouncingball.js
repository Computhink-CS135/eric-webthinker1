
//  Recap 1
let picoImage;
let popSound;

function preload() {
    picoImage = loadImage('assets/pico.png');
    popSound = loadSound('assets/pop.mp3');
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
    image(picoImage, 100, 100, 200, 200);
}