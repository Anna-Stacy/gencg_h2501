
//UNICORN PERSONA



function setup()
{
    // Canvas size
    createCanvas(600, 400);
}

function draw()
{
    
    background('skyblue');

    // my magical head
    noStroke();
    fill('white'); 

    // positioned slightly to the right of center
     headX = 300;
     headY = 200;
     headWidth = 220;
     headHeight = 250;
    ellipse(headX, headY, headWidth, headHeight);

    // my cute muzzle 
    muzzleX = headX + 100;
    muzzleY = headY + 30;
    muzzleWidth = 100;
    muzzleHeight = 80;
    ellipse(muzzleX, muzzleY, muzzleWidth, muzzleHeight);

    // My magical horn
    hornTipX = headX - 0;
    hornTipY = headY - 200;
    hornBaseX = headX - 0;
    hornBaseY = headY - 110;

    // basic white form for horn
    fill('grey');
    triangle(hornTipX, hornTipY, 
             hornBaseX, hornBaseY, 
             hornBaseX - 30, hornBaseY + 5);

    // Light Grey side (shadow)
    fill('lightgrey');
    triangle(hornTipX, hornTipY, 
             hornBaseX - 30, hornBaseY + 5, 
             hornBaseX - 50, hornBaseY - 10);
             
    // My magical main
    noStroke();
    maneX = headX - 120;
    maneY = headY - 120;
    
  // colour of my mane
    fill('lightgreen'); 
    ellipse(maneX, maneY, 120, 110);

    fill('lightpink');
    ellipse(maneX + 30, maneY + 90, 100, 110);

    fill('lightblue');
    ellipse(maneX + 50, maneY + 40, 70, 100);

  // pretend this is flowing hair
    fill('violet');
    ellipse(maneX + 50, maneY + 210, 320, 140); 
  
  
    // my eye
    fill('black'); 
 
    // Left Eye Position 
    circle(headX + 50, headY - 30, 15);

    
    // Nostrils on the muzzle
    noStroke();
    fill(0);
    circle(muzzleX + 10, muzzleY + 10, 5);
    circle(muzzleX - 10, muzzleY + 10, 5);
  
  // so proud...
}