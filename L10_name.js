
let inputText;
let displayText = "Your Name Here";

function setup() {
    createCanvas(600, 400);
    textAlign()
    inputText = createInput();
    inputText.position(width / 2, height / 2);
    inputText.input(updateText)
}
function draw() {
    background(220)
    Text(displayText, width / 2, height / 2)
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}