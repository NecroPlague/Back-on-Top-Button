$(document).ready(function(){
    let goTop = $('#gototop');

    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            goTop.fadeIn(500);
        }else{
            goTop.fadeOut(500);
        }
    });

    goTop.click(function(){
        $('html').animate({
            scrollTop : 0
        } , 3000)
    });
});