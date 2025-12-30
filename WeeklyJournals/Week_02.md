# Weekly Journal 02

## Exploration & Experimentation

Week 2 was still foundations, but with more “okay now touch it and see what happens.” We went into interactive design, and I immediately became obsessed with making the sketch react to the cursor. I tested mapping the mouse position to scale so shapes would expand and shrink as I moved. Something like radius = map(mouseX, 0, width, 10, 200) became my new best friend. I also played with sensitivity, because if the range is too big, the sketch feels like it’s screaming. If it’s too small, it feels like it’s ignoring me (rude).

Also: I had lost the Week 1 image because I had no account, so this week I made an account and re-did the work so I could stop living dangerously. This was the week I realized p5.js isn’t hard, but my file management habits are. Now it’s saved. Forever. Muhahaha.


[Image: Interactive sketch where a simple form changes size based on cursor movement.]
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/N8xI2dI3N" width="100%" height="450" frameborder="no"></iframe>  
{% endraw %}

## Influences & References

I didn’t anchor this week to one specific artist, but the influence was the idea of a viewer becoming part of the artwork. Even a simple interaction changes the relationship: it’s no longer “look at my drawing,” it’s “move and the system responds.” That matters because interactivity is basically the beginning of a future theme: controlling a transition between two states. I didn’t have “sun/moon rotation system” in my head yet, but I had the first ingredient: input driving change.  


## Algorithmic Thinking
This week’s logic is a clean input-to-parameter pipeline. If the mouse moves, then a variable changes, and then the drawing uses that variable. The machine imaginaire is: measure mouseX, convert it into a usable range, and apply it as a size, spacing, or intensity. In rules: if the mouse is left, small; if the mouse is right, large. The computer is basically a translator between my hand movement and a visual response.  


## Critical Reflection
What worked: immediate satisfaction. Interactivity makes even a plain circle feel alive, like it has a pulse. What failed: my early tendency to overdo the effect and accidentally create chaos. I learned that “responsive” doesn’t mean “violent.” Next step: make motion feel smoother and more intentional. I want changes to feel like they have momentum, like a cycle, rather than snapping around like a nervous squirrel.