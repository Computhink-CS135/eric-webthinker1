
let inputText;
let displayText = "Your Name Here";

function setup() {
    createCanvas(600, 400);
    textSize(50);
    textAlign(CENTER, CENTER);
    let inputX = this.CanvasCaptureMediaStreamTrack.offsetLeft + (width / 2) - 80
    let inputY = this.CanvasCaptureMediaStreamTrack.offsetTop + (height / 2) - 10
    inputText = createInput();
    inputText.position(inputX, inputY);
    inputText.input(updateText);
}
function draw() {
    background(220);
    text(displayText, width / 2, height * 0.3);
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}