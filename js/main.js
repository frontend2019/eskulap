(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.menu').toggleClass('menu_state_open');

    });
  });
})(jQuery);


function acceptCookie() {
  document.getElementsByClassName("cookie")[0].style.display = "none";
}


(function ($) {
  $(function () {
    $('.nav__item').on('click', function () {
      $(this).closest('.menu').toggleClass('menu_state_open');

    });
  });
})(jQuery);

$(document).ready(function () {
  // $('.btn--title').click(function () {
  //   $('.section__form').addClass('active');
  //   $('.menu__icon').addClass('form-hover');
  // });

  $('.btn--footer').click(function () {
    $('.section__form').addClass('active-footer');
    $('.menu__icon').addClass('form-hover');
  });
  $('.close').click(function () {
    $('.section__form').removeClass('active-footer');
    $('.section__form').removeClass('active');
    $('.menu__icon').removeClass('form-hover');

  })
});

function showSymu() {
  document.getElementsByClassName("symu")[0].style.cssText = "display:block; z-index: 100;";
  document.getElementsByClassName("shadow")[0].style.display = "block";
}

function hideSymu() {
  document.getElementsByClassName("symu")[0].style.display = "none";
  document.getElementsByClassName("shadow")[0].style.display = "none";

}



