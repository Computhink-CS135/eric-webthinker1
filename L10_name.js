
let inputText;
let displayText = "Your Name Here";

function setup() {
    createCanvas(600, 400);
    inputText = createInput();
    inputText.position(width / 2, height / 2);
    inputText.input(displayText)
}
function draw() {
    background(220)
}