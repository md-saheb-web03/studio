// navbar code 
$(document).ready(function () {
    const $navbar = $('#navbar_main');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }
    });
});
