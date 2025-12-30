# Weekly Journal 04

## Exploration & Experimentation

This week we looked more at “the machine,” and I immediately interpreted that as: I am a florist with a computer science degree-in-progress, so obviously I should make a generative flower machine. Logical. I built an interactive flower sketch as a base, then decided to evolve it into a flower-person because my brain loves chaos and character design apparently.

In the flower-person sketch, I added cursor mechanics so I could “add petals,” and clicking changed skirt colors. I had to control where things went, otherwise it became a flower explosion. I tried setting a maximum number of petals and experimented with how they should spread when the head area got crowded. I also fought with positioning and consistent scale, especially since the legs looked fine in the editor but got distorted in my website previews. At that point I declared it an “artistic choice,” because if the universe can be dramatic, so can I.

[Image: Interactive flower sketch where petals accumulate and colors change.]
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/6LaO1NNyo" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

[Image: Flower-person sketch with petal skirt and interactive features.]
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/xyg8V6ijX" width="100%" height="450" frameborder="no"></iframe> 
{% endraw %}


## Influences & References
Here is the inspiration image for the petal skirt concept (because yes, I absolutely needed a visual target):
https://www.vecteezy.com/vector-art/65015658-girl-wearing-flower-petal-skirt-running-happily-with-orange-hair-on-green-background-illustration

This reference mattered because it gave me a silhouette to code toward. Generative systems can spiral into randomness fast, so having a clear “this is what it should read as” helped me constrain decisions. Also, flowers are basically nature’s version of pattern systems, and the more I worked with them, the more I kept thinking about cycles: blooming, fading, returning. Which, hello, sounds a lot like where the sun and moon will eventually show up.  



## Algorithmic Thinking
The logic was an accumulator with constraints. Each time the interaction triggers, a new petal is placed according to a rule (often based on angle around a center). If too many petals stack in one area, the system nudges placement so they spread out, like “if petals > X, shift the next one sideways.” Clicking on the skirt checks a region (distance or bounding box logic) and then changes skirtColor to the next palette value. My machine imaginaire is like a dressmaker-bot: it keeps adding elements, but it still has to keep the form readable.  


## Critical Reflection
What worked: mixing my past (floristry) with my present (code) made the work feel personal instead of purely technical. What failed: proportion consistency across contexts. That leg distortion taught me that generative art is also about robustness, what happens when the same rules are displayed somewhere else. Next step: I want more controlled parameters and smoother transitions, because I can feel myself moving away from “add more stuff” and toward “shift between states.” 

#### Question: What is the meaning of life? = Photosynthesis. 
All jokes aside. My question is more: How will my skills improve?