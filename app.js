

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

