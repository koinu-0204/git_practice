

$(function(){
    $('.dropdwn li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdwn_menu",this).slideUp();
    });
});



$('.hoge').on('click', function() {
    href= $(this).attr("href");

 let target = $(href).offset().top;

  $('html, body').animate({scrollTop: target}, 500);

})


$('#animation').css('visibility','hidden');

$(window).scroll(function(){

    var windowHeight = $(window).height();
    var topWindow = $(window).scrollTop();

    $('#animation').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 100){
            $(this).addClass("fadeInDown");
        }
    });
    
});

$(function(){
    var pagetop = $('#page_top');
    
    pagetop.hide();
    
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });