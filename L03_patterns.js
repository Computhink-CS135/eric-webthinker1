
let colorValue; 0

function setup() {
    createCanvas(600, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // circle(75,200 ,100)
  // circle(225,200 ,100)
  // circle(375,200 ,100)
  // circle(525,200 ,100)

  // Task 1: Colour Gradient
  // for (let i = 0; i < 5; i++) {
  //   fill(20 + i * 50, 20, 20 + i * 50);
  //   circle(200 + i * 50, 200, 40);
  // }

  // Task 2: Colour Loop
  // circle(100, 100, 100);
  // fill(colorValue);
  // colorValue++;

  // Task 3: Row of Circles
  // for (let i = 0; i < 10; i++) {
  //   fill(i % 2 * 255);
  //   circle(50 + 50 * i, 100, 50);
  // }

  // Task 4: Grid of Squares
  for (let i = 0; i < 5; i++)
    fill(i % 2 * 255)
    rect(0 + 100 , 0, 100, 100)
}