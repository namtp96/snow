document.addEventListener('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.logo img').attr('src', 'images/logo.svg');
        $('.fixed').addClass('changed');
    } else {
        $('.logo img').attr('src', 'images/logo-light.svg');
        $('.fixed').removeClass('changed');
    }
})
function scrollToSlc(slc) {
    $('html, body').animate({
        scrollTop: $(slc).offset().top - 100
    }, 500);
    $('nav').removeClass('show');
    $('body').removeClass('hide');
}
$('#menu-icon').click(function () {
    $('nav').toggleClass('show');
    $('body').toggleClass('hide');
});
$(document).ready(function(){
    $('#sec2 .pt').css('height', $('#sec2 .pt').css('width'));
    $(window).resize(function(){
        $('#sec2 .pt').css('height', $('#sec2 .pt').css('width'));
    });
    $('#parnet-slick').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 580,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 1
            }
          }
        ]
      });
      $('#post-slick').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      });
})
