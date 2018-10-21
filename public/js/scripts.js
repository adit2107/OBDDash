$(document).ready(function(){
    // setTimeout(function(){
    //     $('.car-body').addClass('slow-speed');
    //     $('.car-gradient .car-gradient1').addClass('active');
    // },1000)    
    // setTimeout(function(){
    //     slow_speed();
    // },3000)    
    // $('.car-2-inner').addClass('left-side-wheel-move');

})

function slow_speed(){
    $('.car-body').removeClass('slow-speed');
    $('.car-body').addClass('medium-speed');
    $('.car-gradient .car-gradient1').removeClass('active');
    $('.car-gradient .car-gradient3').removeClass('active');
    $('.car-gradient .car-gradient4').removeClass('active');
    $('.car-gradient .car-gradient2').addClass('active');
    setTimeout(function(){
        medium_speed();
    },6000)
}

function medium_speed(){
    $('.car-body').removeClass('medium-speed');
    $('.car-body').addClass('fast-speed');   
    $('.car-gradient .car-gradient1').removeClass('active');
    $('.car-gradient .car-gradient2').removeClass('active');
    $('.car-gradient .car-gradient4').removeClass('active');
    $('.car-gradient .car-gradient3').addClass('active');
    setTimeout(function(){
        fast_speed();
    },10000)
}
function fast_speed(){
    $('.car-body').removeClass('fast-speed');
    $('.car-body').addClass('full-stop');
    $('.car-gradient .car-gradient1').removeClass('active');
    $('.car-gradient .car-gradient2').removeClass('active');
    $('.car-gradient .car-gradient3').removeClass('active');
    $('.car-gradient .car-gradient4').addClass('active');
    setTimeout(function(){
        stop_speed();
    },14000)
}
function stop_speed(){
    $('.car-body').removeClass('full-stop');
    $('.car-body').addClass('slow-speed');
    setTimeout(function(){
        slow_speed();
        $('.car-gradient .car-gradient2').removeClass('active');
        $('.car-gradient .car-gradient3').removeClass('active');
        $('.car-gradient .car-gradient4').removeClass('active');
        $('.car-gradient .car-gradient1').addClass('active');
    },500)  
}