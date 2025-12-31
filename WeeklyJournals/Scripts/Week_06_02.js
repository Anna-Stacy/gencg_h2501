
// UNICORN LEGEND


function setup()
{
  createCanvas(500, 400);
  noLoop(); 
  angleMode(DEGREES); // Makes drawing arcs easier go instructionsss
}

function draw()
{
  // Use a light, happy color for the background
  background('#E0F7FA'); 
  
  // Center the entire drawing
  translate(width / 2, height / 2);
  
  // Set a consistent 'sticker' outline
  stroke(0);
  strokeWeight(3);

  //Back part of the mane
  // These are drawn first so they appear behind the head.
  // We use noStroke() for a soft, blended, cloud-like effect.
  noStroke();
  
  // Rainbow pastel colors
  const maneColors = [
    color(255, 179, 186), // Pink
    color(255, 223, 186), // Orange
    color(255, 255, 186), // Yellow
    color(186, 255, 201), // Green
    color(186, 225, 255), // Blue
  ];
  
  // Draw overlapping ellipses to create a 'puffy cloud' mane
  fill(maneColors[4]); // Blue
  ellipse(0, 40, 200, 180);
  
  fill(maneColors[3]); // Green
  ellipse(80, 20, 160, 160);
  
  fill(maneColors[2]); // Yellow
  ellipse(-80, 20, 160, 160);
  
  fill(maneColors[1]); // Orange
  ellipse(40, -60, 150, 150);
  
  fill(maneColors[0]); // Pink
  ellipse(-40, -60, 150, 150);


  // EARSSS
  // Restore the stroke for the main body parts
  stroke(0);
  strokeWeight(3);
  
  // Left Ear
  fill(255); // White outer ear
  ellipse(-70, -75, 40, 80);
  fill('#FADADD'); // Pink inner ear
  ellipse(-70, -70, 20, 50);
  
  // Right Ear
  fill(255); // White outer ear
  ellipse(70, -75, 40, 80);
  fill('#FADADD'); // Pink inner ear
  ellipse(70, -70, 20, 50);


  // Head and snout/muzzle
  // The head and snout are two overlapping ellipses.
  // The stroke creates the "sticker" definition.
  
  fill(255); // White
  // Main Head Shape
  ellipse(0, 30, 180, 200);
  // Snout Shape
  ellipse(0, 85, 140, 110);


  // horn
  // Drawn after the head but before the bangs.
  fill('#FFF7AD'); // Light golden yellow
  triangle(0, -170, -25, -80, 25, -80);
  
  //streaks for the horn
  strokeWeight(2);
  line(-15, -110, 15, -130);
  line(-10, -140, 10, -160);


  // Bangs
  // cotto candy like fluffy bangs
  // Uses noStroke() again for a soft look.
  noStroke();
  
  fill(maneColors[0]); // Pink
  arc(0, -60, 100, 100, 0, 360);
  
  fill(maneColors[2]); // Yellow
  arc(-35, -35, 100, 80, 0, 360);
  
  fill(maneColors[4]); // Blue
  arc(35, -35, 100, 80, 0, 360);


  //  Face Details :,D
  
  // Eyes (Closed, happy)
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(-40, 10, 35, 35, 30, 150); // Left eye
  arc(40, 10, 35, 35, 30, 150); // Right eye
  
  // Eyelashes
  strokeWeight(2);
  line(-58, 18, -68, 15); // Left
  line(-54, 20, -64, 10);
  line(58, 18, 68, 15); // Right
  line(54, 18, 64, 10);

  // Nostrils
  fill(0);
  noStroke();
  ellipse(-30, 60, 6, 8); // Left
  ellipse(30, 60, 6, 8); // Right
  
  // Mouth (Happy smile)
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(0, 100, 50, 50, 20, 160);
}