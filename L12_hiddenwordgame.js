
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
    inputText.position(300, 200);
    inputText.input(updateText);
    button = createButton("submit");
    button.position(width / 2, height * 0.2 + 250);
    button.mousePressed(generateStory);
}
function draw() {

}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}
function generateStory() {
    background(100)
    text(displayText, 400, 300)

}