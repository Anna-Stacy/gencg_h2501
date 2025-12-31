# Weekly Journal 05

## Exploration & Experimentation

This week was reflection time. The word reflection made me think of water. So I wanted shimmering waves because the ocean owns my heart and also because I wanted to make something that felt like motion without me manually animating every detail. I started experimenting with noise and interactivity. My first attempt was basically me wrestling with noise() like it owed me money. I tested noise scales and amplitudes until the motion looked less like static and more like flowing texture. Then I made another version, trying to simplify it so it didn’t become visual soup.

I also used a reference script from a p5.js user because sometimes you learn faster by seeing how someone else structured the machine. And yes, I studied it like a detective: “why did they choose this loop, why is this increment so small, why does this feel smoother than mine?”

### Image: Noise-based lines that hint at water or sky
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/iE0939ubP" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Image: Alternative wave/shimmer attempt with different rounder noise settings 
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/FPgmJP1HH" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

Reference script preview image (because research is self-care):
{% raw %}
<iframe src="https://editor.p5js.org/GarrettC/full/EKY0h_9ck" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

## Influences & References
Vincent van Gogh was my emotional reference point here, specifically The Starry Night, because he paints the night sky like it’s made of water and wind. That matters because it treats “night” as active, not empty. It’s not just darkness; it’s movement, texture, mood. I want night to feel like something you enter, not just a black screen.

Vincent van Gogh: [Starry Night](https://www.vangoghgallery.com/img/starry_night_full.jpg)
Starry night p5 [reference](https://editor.p5js.org/GarrettC/sketches/EKY0h_9ck)

## Algorithmic Thinking
For every x/y position in a loop, I computed a noise value and used it to offset a line or curve.  The point is that the drawing tool isn’t a pencil, it’s a rule-set that generates a star over each cursor click.

## Critical Reflection
What worked: noise instantly creates organic motion, which feels like magic when it works.

What failed: when I stacked too many marks, it stopped being shimmer and started being “I dropped my spaghetti on the canvas.” I learned that flow needs restraint. 

Next step: bring color transitions into the system. I can already feel myself aiming toward warm/cool palettes and gradients.
