
let inputText;
let displayText = "Your Name Here";
let inputX = this.CanvasCaptureMediaStreamTrack.offsetLeft + (width / 2)

function setup() {
    createCanvas(600, 400);
    textSize(50)
    textAlign(CENTER, CENTER)
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