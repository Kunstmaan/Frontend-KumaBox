# Kumabox 0.1

Based on avgrund by Hakim El Hattab, http://hakim.se

**HOW TO USE:**
    Requires jQuery and Modernizr.  

    - JS
        $('.modal').kumaBox();

    - HTML
        <!-- Link -->
        <a class="modal" href="http://placekitten.com/1000/500" data-target="easy-to-use">
            <img src="http://placehold.it/180x120" alt="" />
        </a>

        <!-- Modal box -->
        <div id="easy-to-use" class="modal-box stack">
            <img src="http://placekitten.com/1000/500" />
        </div>

**ISSUES:**
    
    -   Extremely annoying flickering on mobile devices
    -   Touchstart event on mobile devices:
        -   Prevents the user from scrolling
        -   Implement a close button instead
    -   Vertical box position when resizing from largest to smallest layout
    -   Box doesn't scale with the image (box-shadow ugliness)

 **TODO:**

    -   Clean up code (internal code reviews?)
    -   Test mobile devices, IE
    -   Make this work without Modernizr; the less dependencies, the better
    -   Add Jasmine + tests

**IDEAS:**
    
    -   More effects
    -   Better configurability
    -   Documentation
    -   Navigating through modal windows? (left, right arrows)