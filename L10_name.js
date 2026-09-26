
let inputText;
let displayText = "Your Name Here";

function setup() {
    background(220);
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
    Text(displayText, width / 2, height * 0.3);
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}