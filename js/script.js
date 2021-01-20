$(document).ready(function () {
  // При наведении на меню:
  $(".menu--link").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
      $(".active--menu").addClass("active");
    }
  );

  //   Burger menu:
  $(".burger--menu").on("click", function () {
    $(".fixed--menu").addClass("active");
  });

  $(".close--menu").on("click", function () {
    $(".fixed--menu").removeClass("active");
  });

  // Страница "Продукция" при наведении на блоки:

  $(".product--block").hover(
    function () {
      $(this).find('.product--img').addClass('active');
      $(this).find('.product--block--link').addClass('active');
    },
    function () {
      $(this).find('.product--img').removeClass("active");
      $(this).find('.product--block--link').removeClass('active');
    }
  );

// Модальное окно:
$('.modal--btn').on('click', function() {
  $('.modal--form').addClass('show--modal');
});
$('.close--button').on('click', function() {
  $('.modal--form').removeClass('show--modal');
});

// Главная страница. Слайдер:
  $(".slider--container").slick({
    infinite: true,
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2200,
    prevArrow: "<div class='left__arrow'><div>",
    nextArrow: "<div class='right__arrow'></div>",
  });
});

$(document).ready(function(){

  $("#phone").mask("+7 (999) 999-99-99");

});

// Preloader
let preloader = document.getElementById("preloader");

window.onload = function () {
  preloader.style.display = "none";
};








