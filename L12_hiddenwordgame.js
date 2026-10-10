
let button;
let inputText;
let displayText = "TYPE SOMETHING";

function setup() {
    createCanvas(600, 400)
    background(100)
    textSize(50);
    textAlign(CENTER, CENTER);

    let inputX = this.canvas.offsetLeft + (width / 2) - 80;
    let inputY = this.canvas.offsetTop + (height / 2) - 10;
    inputText = createInput();
    inputText.position(inputX, inputY);
    inputText.input(updateText);
    button = createButton("submit");
    button.position(width / 3 + 75, height * 0.2 + inputY);
    button.mousePressed(generateStory);
}
function draw() {

}
function updateText() {
    displayText = this.value();
}
function generateStory() {
    background(100)
    text(displayText, 400, 300)

}