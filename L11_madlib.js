
let inputText;
let displayText = "Your Name Here";
let colourPicker;

function setup() {
    nounField = 
    createCanvas(600, 400);
    textSize(50);
    textAlign(CENTER, CENTER);
    let inputX = this.canvas.offsetLeft + (width / 2) - 80;
    let inputY = this.canvas.offsetTop + (height / 2) - 10;
    nounField = createInput();
    inputText.position(inputX, inputY);
    inputText.input(updateText);
}
function draw() {

}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}