let shapecolour = "#ff0000"
let circlesize = 0

function setup() {
    createCanvas(600, 400);
    background(225);
//   noLoop(); // Stops continuous drawing
}
// function draw() {
//     fill(shapecolour);
// }
// function mousePressed() {
//     let randomcolour = color(random(255), random(255), random(255));
//     fill(randomcolour);
//     noStroke();
//     ellipse(200, 200, 80, 80)
// }
// function mouseReleased() {
//     fill("#ffffff")
//     ellipse(200, 200, 80, 80)
// }
function mouseMoved() {
    let circlesize = 0
    let perivousmouseX = mouseX
    if (perivousmouseX < mouseX) {
        circlesize--
    } else {
        
    }
    circlesize++

    // let randomcolour = color(random(255), random(255), random(255));
    // fill(randomcolour)
    // ellipse(mouseX, mouseY, 10, 10)
}