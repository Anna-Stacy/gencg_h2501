# Weekly Journal 12

## Exploration & Experimentation

This week was remote project work, so I went into “build the engine” mode. I prototyped a rotation interaction where dragging horizontally changes an angle variable. I tested sensitivity by changing the multiplier on drag distance, because too small makes it feel unresponsive and too large makes it feel like the disc is trying to escape the screen. I also started experimenting with momentum: instead of stopping dead when I release the mouse, I explored a velocity approach where the disc keeps spinning and slowly settles. That tiny detail changed the feeling a lot. Suddenly it felt less like a UI widget and more like an object.

[Image: Prototype showing a rotating disc controlled by drag; simple background.]

## Influences & References
This week’s reference is the logic of physical motion. Real things have inertia. Real cycles don’t snap. That matters because day/night isn’t a toggle in life—it’s a gradual shift. Also, my earlier clock experiments come back here: time is rotation. I basically spent Week 3 drawing time as circles, and now I’m making circles behave like time.

## Algorithmic Thinking
The machine imaginaire is an inertial rotation system. If dragging, track dx and update target rotation. If not dragging, apply velocity to the current angle and damp it with friction each frame. Wrap the angle so it stays in a stable range instead of growing forever. The rules make the interaction feel continuous, and continuity is the emotional goal.

## Critical Reflection
What worked: momentum made the interaction feel satisfying. What failed: rotation alone isn’t meaning. A rotating circle is just… a rotating circle unless the visuals respond to it. Next step: connect rotation to color and atmosphere using interpolation. I want the rotation itself to cause a shift in world mood—warm day to cool night—so the interaction becomes the narrative.