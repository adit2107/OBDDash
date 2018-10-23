$(document).ready(function(){
    // $('.car-gradient .car-gradient1').addClass('active');
    // setTimeout(function(){
    //     $('.car-body').addClass('slow-speed');
    //     $('.car-gradient .car-gradient1').addClass('active');
    //     $('.car-gradient .car-gradient2').removeClass('active');
    //     $('.car-gradient .car-gradient3').removeClass('active');
    //     $('.car-gradient .car-gradient4').removeClass('active');
    // },1000)    
    // setTimeout(function(){
    //     slow_speed();
    // },3000)    
    //$('.car-2-inner').addClass('left-side-wheel-move');

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
    $('.speed-animation').addClass('active');
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
    $('.speed-animation').removeClass('active');
    $('.car-gradient .car-gradient1').removeClass('active');
    $('.car-gradient .car-gradient2').removeClass('active');
    $('.car-gradient .car-gradient3').removeClass('active');
    $('.car-gradient .car-gradient4').addClass('active');
    $('.main-car-body').removeClass('active');
    $('.main-car-body-accident').addClass('active');
    setTimeout(function(){
        stop_speed();
    },14000)
}
function stop_speed(){
    $('.car-body').removeClass('full-stop');
    $('.car-body').addClass('slow-speed');
    $('.car-gradient .car-gradient2').removeClass('active');
    $('.car-gradient .car-gradient3').removeClass('active');
    $('.car-gradient .car-gradient4').removeClass('active');
    $('.car-gradient .car-gradient1').addClass('active');
    setTimeout(function(){
        slow_speed();
        $('.main-car-body').addClass('active');
        $('.main-car-body-accident').removeClass('active');
    },500)  
}