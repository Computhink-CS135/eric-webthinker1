
let inputText;
let displayText = "Your Name Here";

function setup() {
    createCanvas(600, 400);
    textSize(50)
    textAlign(CENTER, CENTER)
    inputText = createInput();
    inputText.position(width / 2, height / 2);
    inputText.input(updateText)
}
function draw() {
    Text(displayText, width / 2, height / 2)
    background(220)
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}