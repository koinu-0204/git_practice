$('.left')
.on("mouseover",function(){
    $('#sideber').slideToggle();
})
$('#header-left')
.on("mouseleave",function(){
    $('#sideber').slideToggle();
})


// $('a[href^=#]').click(function(){
//       var adjust = 20;
//       var speed = 10;
//       var href= $(this).attr("href");
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       var position = target.offset().top + adjust;
//       $('body,html').animate({scrollTop:position}, speed, 'swing');
//       return false;
// });

$('.hoge').on('click', function() {
    href= $(this).attr("href");

    let target = $(href).offset().top;

    $('html, body').animate({scrollTop: target}, 500);

})  