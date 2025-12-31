# Weekly Journal 14 - Final Project Presentation
![Toying with the perspective](./Images/Week_14_FinalDesignAmesInspo.png)

## Exploration & Experimentation
Final week. Final presentations. Final me pretending I’m calm. The final project is my interactive Sun/Moon sketch, built in p5.js using WEBGL, where the central disc rotates and the whole scene transitions between warm “day” and cool “night.” The script is not a random pile of tricks; it’s the end result of everything I kept circling around all semester: cycles (Week 3), machines (Week 4), atmosphere (Week 5), characters/faces (Week 7), gradients and controlled transitions (Week 8 onward), and finally: final tweaks and presentation preperation (Weeks 12–13).

The interaction is based on dragging and inertial rotation. When I drag, I update the target rotation and velocity; when I release, the disc keeps spinning and slowly eases down like an object with friction. The visuals respond to the rotation: the background blends between palettes, a gradient shifts, stars fade in during night, and the disc face changes expression so the mood reads instantly.

### Image: Final Sun/Moon sketch showing a rotating disc, gradient atmosphere, and stars fading depending on state
{% raw %}
<iframe src="https://editor.p5js.org/Anna-Stacy/full/OJNjFCiLy" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

## Influences & References
The sun and moon aren’t just cute icons, they’re a structured way to talk about contrast, mood shifts, and the idea that both states exist in the same system (reference to my little pony, the royal sisters hehehe, watch my little pony to learn more about them).  

![Royal Sisters Human Figure Style](./Images/Week_14_MLP.png)

It also connects back to my earlier references: The Starry Night taught me that night can be alive and textured, and the face studies taught me that expression can make a system emotionally legible without needing explanation. The choice to use warm/cool palettes isn’t just aesthetic, it's a tribute to my hobbies as mentioned in the presentation.

## Algorithmic Thinking
The logic is a rotation-driven state machine with easing. The script sets up angle, targetAngle, and angularVelocity, plus interaction flags like isDragging and lastX. While dragging, updates rotation targets and velocity. When not dragging, the system continues motion with friction (angularVelocity *= 0.95), so it gradually settles instead of stopping abruptly.



## Critical Reflection
What worked:  
Making one central object carry the whole theme. The disc became my anchor, and everything else (gradient, stars, face details) supports it. Easing was the secret sauce, without it, the transition would feel like a cheap slider; with it, it feels like a cycle that has rhythm. The inertial rotation also made the interaction feel physical, which matches the idea of turning from night to day instead of toggling it like a dime switch.

Next step (if I extend this later):  
Explore a richer “twilight” region between sun and moon, something subtle, not a third mode, but a more complex blend. 
