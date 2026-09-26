
// function setup() {
//     createCanvas(600, 400);
//     textAlign(LEFT, CENTER);
//     textSize(24);
//     fill("rgb(150, 0, 255)");
// }
// function draw() {

//     background(220);

//     hour = hour();
//     min = minute();
//     sec = second();

//     timeString = nf(hour, 2) + " : " + nf(min, 2) + " : " + nf(sec, 2);

//     // text(hour, width / 2, height / 2);
//     // text(" :", width / 2 + 25, height / 2);
//     // text(min, width / 2 + 50, height / 2);
//     // text(" :", width / 2  + 75, height / 2);
//     // text(sec, width / 2 + 100, height / 2);
// }

let intervalid = 0;
let x = 0;

function setup() {
    createcanvas(600, 400);
}