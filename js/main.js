// $(function () {
//     $('.section-close').on('click', function () {
//         $('.section-pop-up').toggleClass('section__disabled');
//     });
// });


$(function () {
    $('.toggler-button, .section-close').on('click', function () {
        $('.section-pop-up').toggleClass('section__enable');
    });
});


$(function () {
    $('.section-block__submit, .hire-me-close').on('click', function () {
        $('.section-hire-me').toggleClass('section__enable');
    });
});


