$(document).ready(function() {


// При наведении на меню:
$('.menu--link').hover(function() {
    $(this).addClass('active');
},
function() {
    $(this).removeClass('active');
    $('.active--menu').addClass('active');
});

// Главная страница. Слайдер:
$(".slider--container").slick({
    infinite: true,
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 1800,
    prevArrow: "<img class='left__arrow' src='img/left-arrow.png'>",
    nextArrow: "<img class='right__arrow' src='img/right-arrow.png'>"
  });

//   Burger menu:

$('.burger--menu').on('click', function() {
    $('.fixed--menu').addClass('active');
});

$('.close--menu').on('click', function() {
    $('.fixed--menu').removeClass('active');
});

});