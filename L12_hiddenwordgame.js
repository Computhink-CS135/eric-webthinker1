
let button;
let inputText;
let displayText = "TYPE SOMETHING";
let wordArray = ["claustraphobic", "rhombohedron", "cataracts", "tripophobia", "geography", "hippopotamus", "Pneumonoultramicroscopicsilicovolcanoconiosis", ""]
let randomWord;
let displayHint;

function setup() {
    createCanvas(600, 400)
    background(220);
    textSize(50);
    textAlign(CENTER, CENTER);

    let inputX = this.canvas.offsetLeft + (width / 2) - 80;
    let inputY = this.canvas.offsetTop + (height / 2) - 10;
    inputText = createInput();
    inputText.position(inputX, inputY);
    inputText.input(updateText);

    inputText.size(150, 30)
    inputText.style("background-color", "lightblue")
    inputText.style("font-size", "20px")
    inputText.style("border", "1px solid black")
    inputText.style("color", "purple")
    inputText.style("text-align", "center")

    button = createButton("submit");
    button.position(width / 3 + 75, height * 0.2 + inputY);
    button.mousePressed(submitGuess);

    randomWord = random(wordArray);
    displayHint = randomWord[0].toUpperCase() + " _".repeat(randomWord.length - 1)
    text(displayHint, width / 2, height * 0.4);
}
function updateText() {
    displayText = this.value();
}
function submitGuess() {
    background(220);
    fill(random(0, 255), random(0, 255), random(0, 255));
    text(displayText, width / 2, 100);
}