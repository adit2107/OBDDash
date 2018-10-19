var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function(){
    //TweenMax.to(".car-wheel1",100, {rotation:360});
    TweenMax.to('.car-wheel1', 2, {rotation:360, repeat:1000, ease: Power0.easeNone});
    TweenMax.to('.car-wheel2', 2, {rotation:360, repeat:1000, ease: Power0.easeNone});
    TweenMax.to('.car-wheel1', 3, {rotation:1440, repeat:1000, ease: Power0.easeNone, delay: 5});
    TweenMax.to('.car-wheel2', 3, {rotation:1440, repeat:1000, ease: Power0.easeNone, delay: 5});
    TweenMax.to('.car-wheel1', 3, {rotation:0, repeat:0, ease: Power0.easeNone, delay: 10});
    TweenMax.to('.car-wheel2', 3, {rotation:0, repeat:0, ease: Power0.easeNone, delay: 10});
    TweenMax.to('.car-body', 0.5, {y:-5,x:2,rotation: 1, delay: 13});
    TweenMax.to('.car-body', 0.5, {y:0,x:0,rotation: 0, delay: 13.5});
    TweenMax.to('.second-wheel', 0.5, {rotationY:30, rotationX:11,ease: Power0.easeNone,});
    TweenMax.to('.second-wheel2', 0.5, {rotationY:30, rotationX:11,ease: Power0.easeNone,});
    
    TweenMax.to('.second-wheel', 0.5, {rotationY:0, rotationX:0,ease: Power0.easeNone, delay: 1});
    TweenMax.to('.second-wheel2', 0.5, {rotationY:0, rotationX:0,ease: Power0.easeNone, delay: 1});

});

/* Script on load
------------------------------------------------------------------------------*/
$(window).load(function() {
    // page is fully loaded, including all frames, objects and images
});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function() {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).resize(function() {

});

/* Script all functions
------------------------------------------------------------------------------*/