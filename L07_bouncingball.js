
//  Recap 1
let picoImage;
let popSound;

function preload() {
    picoImage = loadImage('assets/pico-a.png');
    popSound = loadSound('assets/pop.mp3');
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background("gray");
    image(picoImage, 100, 100, 200, 200);
}