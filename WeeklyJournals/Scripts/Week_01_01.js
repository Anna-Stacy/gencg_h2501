
// MISERY EMOJI

function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    // Background (soft grey)
    background('midnightblue');

    // Position: (200, 200) - The exact center of the 400x400 canvas for my misery
    noStroke(); 
    fill('yellow');
    circle(200, 200, 300);

    // EYES (Black Dots
    fill(0); // Black

    // Left Eye Position (140, 140), Size 25
    circle(140, 140, 40);
    // Right Eye Position (260, 140), Size 25
    circle(260, 140, 40);

    // my saddness aka line of the smile 
    stroke(0);
    strokeWeight(20);
    noFill();
    
    // lil frown line
    stroke(0);
    strokeWeight(8);
    line(150, 300, 200, 290);


    // My misery incorpareted
    noStroke();
    fill('lightblue');
 
    // Top point (260, 185)
    // Left point (250, 200)
    // Bottom point (260, 215)
    // Right point (270, 200)
    quad(260, 160, 
         220, 210, 
         260, 260, 
         300, 210);
}