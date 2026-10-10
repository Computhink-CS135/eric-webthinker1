
let button;
let inputText;
let displayText = "Your Name Here";

function setup() {
    createCanvas(600, 400)
    background(100)
    textSize(50);
    textAlign(CENTER, CENTER);

    createInput();
    inputText.position(300, 200);
    inputText.input(updateText);
    button = createButton("submit");
    button.position(width / 2, height * 0.2 + 250);
    button.mousePressed(generateStory);
}
function draw() {

}