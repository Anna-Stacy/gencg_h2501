# Weekly Journal 03

## Exploration & Experimentation
This week was online, which was actually kind of nice because I could set up Visual Studio Code at home and live my best two-screen life: code on one screen, sketch on the other, and my brain still struggling in the middle. We were meant to explore structured generative systems, and what I took from that was: repetition is power.  

I experimented with iterative drawing, then got pulled into making a clock system with circles. I built three circles representing seconds, minutes, and hours. I tested how to map time values to sizes, like making seconds tiny and fast-feeling while hours felt heavier. I tweaked my size ranges a lot, when the smallest circle felt too similar to the minute circle, I reduced its max size. When the hour circle dominated too much, I pulled it back. The fun part was refreshing the page and seeing it still represent “now,” like the sketch had a tiny heartbeat connected to real time.


### Image: Three concentric circles representing seconds (small), minutes (medium), hours (large)
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/25ZHauX0c" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

Then I tried to redo the clock with a more artistic twist, mixing earlier techniques so it didn’t feel like a plain diagram.

### Image: Clock-inspired generative variation. Seconds (eyes), Minutes (Blinking), Hour (Moves eyes randomly)
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/WSW46YjHq" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

#### My first try with the eyes... struggles
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/2Iop-Bycb" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}


## Influences & References
Here is the link to the inspiration I included this week, because my brain saw “clusters” and went: yes, that’s a whole aesthetic.  
https://medium.com/@oliviadavisdreamer/why-are-biblically-accurate-depictions-of-angels-a-cluster-of-eyes-and-wings-4c5ad90c8c88

What mattered about this reference wasn’t the biblical angle, it was the visual logic: repetition of a motif (eyes, wings, circles) creates intensity and mood. That idea is important for me because circles keep showing up in my work. Also, I used to draw eyes every day as a child, so I found this idea for a showcase of time fitting.


## Algorithmic Thinking
The algorithm was a translation system: take second(), minute(), and hour() and convert them into drawable parameters. If s goes from 0 to 59, map it into a size range and draw the smallest circle. Then do the same for minutes and hours. The rule is consistent layering: draw the largest circle first, then the smaller ones so they remain visible. My machine imaginaire is basically a “time-to-geometry converter,” like I’m turning the current moment into a shape.  


## Critical Reflection
What worked: the system was readable. Even without labels, the three circles felt like they belonged together because they shared a center and a consistent logic. What didn’t work: the line between “informative” and “expressive” is thin. Too literal and it’s just a clock. Too abstract and it stops being time. Next step: keep the cyclical idea but shift toward atmosphere, something that feels like transitions, like day becoming night instead of numbers being plotted.
