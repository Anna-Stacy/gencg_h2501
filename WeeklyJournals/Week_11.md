# Weekly Journal 11 - Final Project Prototype 2

## Exploration & Experimentation
New week, same celestial body concept, but with me questioning whether I should use literal suns and moons or more interpretive versions, as seen in last weeks tarot card designs. I started thinking about how art history often uses objects, statues, and symbols to represent celestial bodies without drawing them directly, examples being sunrays for the sun, spots for the moon surface.

I experimented with central disc studies. I tested adding “sun” rays as repeated lines and “moon” texture as crater dots. I also played with scale and placement, because a symbol only works if it’s given enough visual authority. A tiny sun in the corner feels like decoration. A big disc in the center feels like a statement.

### Image: Tarot/Geometric style
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/IxfmgUlda" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

## Influences & References
This weeks influence was mainly the tarot card golden cover from week 10. The geometrical shapes and lines spinning with the sun to a rotatable degree before the moon side showed. 

## Algorithmic Thinking
The logic started to become layered and modular. Background layer handles atmosphere. Foreground disc handles the main identity.

## Critical Reflection
What worked: Narrowing the composition to one strong central icon made everything clearer.

What failed: Indecision about how literal vs abstract to be. The spinning function is not smooth towards the cursor. 
 
Next step: The physical transition not stuttering anymore. To connect rotation to color and atmosphere using interpolation. The framerates are not matching. I want the rotation itself to cause a shift in world mood, warm day to cool night.