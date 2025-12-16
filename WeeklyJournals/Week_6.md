# Weekly Journal 6

## Exploration & Experimentation

This week contained two events: a family thing, and my feedback session with my nephew, who is 12 and therefore morally obligated to give me absolutely nothing. My niece used to tell me I’m a unicorn, so I decided to become the unicorn. I made a unicorn sketch with my thought process visible, then started experimenting with animation because classmates suggested I could do more generative images that animate themselves.

I tested movement by shifting small elements frame-by-frame, trying to create “sparkly magic” instead of “static sticker.” I also experimented with breaking the drawing into parts so I could tweak features without rewriting everything. Horn too big? Adjust the horn length variable. Eyes too cursed? Reduce the eye height. (This is how I learned that character design is 50% math and 50% emotional resilience.)

[Image: Unicorn sketch built from shapes, with early animation attempts.]
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/3KaGltaaH" width="100%" height="450" frameborder="no"></iframe> 
{% endraw %}

## Influences & References
I did what any sane person does when coding a unicorn: I skimmed the internet for unicorn p5.js references like I was shopping for mythical livestock. These links mattered because they helped me see how other people structured their code, especially for modular drawing and interaction.

Very first inspiration after research: https://editor.p5js.org/codingtrain/sketches/j2YhLFhxU


Cute Unicorn Game
Unicorn draw: https://editor.p5js.org/ps218478/sketches/0SbhkfBRU

I also did a second sketch iteration that shows how the references influenced my structure and decisions.

{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/HaPxYpIDR" width="100%" height="450" frameborder="no"></iframe> 
{% endraw %}  


## Algorithmic Thinking

The algorithm here is a modular character machine. The unicorn is built from functions that draw parts at positions relative to a base coordinate. If the base changes, everything moves together. Animation comes from time-based modulation: a sparkle might use a sine wave or a frame counter, so it shifts or flickers smoothly. The rule is: don’t redraw a new unicorn every frame, redraw the same unicorn with slightly shifted parameters so it feels alive.  

## Critical Reflection
What worked: I started coding like a person who plans, not like a person who panics (progress!). Breaking drawings into parts was huge for me. What failed: my pride, occasionally, when proportions looked wrong and the unicorn stared into my soul. But feedback pushed me toward animation, and that matters because animation and transitions are the bridge to my later sun/moon idea. Next step: make motion smoother and more intentional, not just “wiggle everything.” I want controlled change, like a gradual shift between moods.


### Algorithmic Logic and difference between before vs after the feedback

![Script Logic](./Scripts/Week_06_01.js)
![Script Logic](./Scripts/Week_06_02.js)
