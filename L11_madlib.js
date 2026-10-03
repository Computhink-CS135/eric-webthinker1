
let inputText;
let displayText = "Your Name Here";
let colourPicker;
let nounField;
let verbField;
let adjectiveField;
let adverbField;
let placeField;

function setup() {
    createCanvas(600, 400);
    textSize(50);
    textAlign(CENTER, CENTER);
    let inputX = this.canvas.offsetLeft;
    let inputY = this.canvas.offsetTop;
    nounField = createInput();
    verbField = createInput();
    adjectiveField = createInput();
    adverbField = createInput();
    placeField = createInput();
    nounField.position(width / 2 + inputX, height / 2 + inputY);
    verbField.position(width / 2 + inputX, height / 2 + inputY + 50);
    adjectiveField.position(width / 2 + inputX, height / 2 + inputY + 100);
    adverbField.position(width / 2 + inputX, height / 2 + inputY + 100);
    placeField.position(width / 2 + inputX, height / 2 + inputY);
}
function draw() {

}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}