# Weekly Journal 13

## Exploration & Experimentation

Workshop week meant refinement. I started merging the pieces: rotation, a two-palette system (warm sun vs cool moon), and background atmosphere. I experimented with gradients by drawing the background in horizontal lines and blending colors across the height of the canvas instead of removing the issue. 

I saw this as an opourtunity to see misshaps as an artistic choice. This was also heavily inspired by the artist Adelbert Ames Jr. (1880-1955) with the Ames Room optical illusion.
[A very interesting blog about him :)](https://davidcycleback.substack.com/p/adelbert-ames-mind-bending-illusions)

![Week 13, Ames Room inspiration](//WeeklyJournals/Images/Week_12_AmesRoom.png)


 After this inspirational struck, I decided to test stars as a night-only layer and played with how many stars feel dreamy versus how many feel like glitter spilled everywhere (spoiler, its not good to add over 5000...).  
 I adjusted density and twinkle speed until it felt like a night sky instead of an LED wall.

Peer review happened, and what was said exactly is XYZ UNCERTAIN, but the general vibe was: make it readable, keep the interaction clear, and don’t overcomplicate the core idea. Which is basically the advice I needed, because my natural instinct is to add “just one more detail” until the sketch collapses under its own ambition.

[Image: Near-final composition showing gradient transitions and stars fading in/out.]

## Influences & References
The workshop process itself became the influence. Iteration is part of generative practice: you tweak a parameter, the system surprises you, and you decide whether that surprise is a gift or a crime. Conceptually, I leaned into systematic variation, one object, many states, because it aligns with the sun/moon duality and keeps the sketch from becoming a random scene collage.

## Algorithmic Thinking
The algorithm became interpolation-driven. Compute a normalized value from the rotation angle (so rotation maps to a 0–1 state), apply easing so it transitions smoothly, then use that eased value to blend colors (lerpColor) and fade details (stars in night, rays in day). The machine imaginaire is: a single hidden dial controls the whole universe, and the viewer spins that dial with their hand.

## Critical Reflection
What worked: cohesion. Once everything listened to the same underlying parameter, the sketch stopped feeling like separate experiments and started feeling like one world. What failed: over-detail temptation. Every time I added too much, the central disc lost its power. Next step: polish, stabilize, and keep the final version focused so it presents clearly during critique.