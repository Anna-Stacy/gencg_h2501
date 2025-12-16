# Weekly Journal 10
## Exploration & Experimentation

This week’s pixel focus made me think about facades, not mirror reflections, but the masks we wear. Pixels are literally a mask: tiny squares that pretend they’re smooth reality when you zoom out. I experimented with pixel-like transformations by reducing detail and rebuilding images using blocky sampling. I played with a pixelSize parameter and tested what happens when it goes from small (almost normal) to large (suddenly abstract).

I also started imagining the sun/moon as a recurring “watermark” motif in my work. Something small but persistent, like a reminder that light and dark both exist, and you don’t get one without the other. I didn’t finalize anything yet, but the concept started to solidify: central celestial icon, shifting atmosphere, and a system that reveals different sides.

[Image: Pixelated/abstract mask-like output with warm/cool palette hints.]  

## Influences & References
This week’s influence was the nature of digital material itself. Pixels aren’t just a technical fact, they’re an aesthetic choice. The idea of a façade matters because it aligns with my theme: surface vs interior, light vs dark, what is shown vs what is hidden. I also kept thinking back to earlier weeks where circles became symbols. Pixels felt like a way to “texture” those symbols, like adding a grainy veil over a face or a disc.

## Algorithmic Thinking
The machine imaginaire is: sample the canvas in steps and redraw it in blocks. The rule is: for each (x, y) in increments of pixelSize, get the color and draw a rectangle. If I connect it to my duality theme, then the system can conditionally shift sampled colors: in “night,” reduce brightness and push toward blue; in “day,” increase warmth and push toward orange/yellow. This makes the pixel system not just an effect, but a state-based transformation.

## Critical Reflection
What worked: pixels made the “facade” idea feel tangible. What failed: pixel transformations can become heavy and slow if you’re not careful, and they can also look like generic filters if there’s no concept behind them. Next step: instead of pixelating everything, I want to use layering: a smooth gradient background, a clear central disc, and state-based details like stars. Basically: atmosphere first, gimmicks second.