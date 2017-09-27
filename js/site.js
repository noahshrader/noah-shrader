function fadeTop() {
    var welcomeMain = $('.welcome');
    var welcomeBg = $('.welcome-bg');
    var st = $(this).scrollTop();
    if ($(window).width() >= 480) {
       welcomeBg.css({'opacity' : (1 - st/460)});
       welcomeMain.css({'opacity' : (1 - st/460)});
    } else {
       welcomeBg.css({'opacity' : (1 - st/320)});
       welcomeMain.css({'opacity' : (1 - st/320)});
    }
    if((welcomeMain).css('opacity') <= 0) {
        welcomeMain.addClass('hide');
    } else {
        welcomeMain.removeClass('hide');
    }
}

$(function() {

    // Top navigation scroll
    $('.welcome .about-link a').click(function() {
        $('html, body').animate({
            scrollTop: $('.info').offset().top - 250
        }, 600);
    });
    $('.welcome .work-link a').click(function() {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 600);
    });
    $('.welcome .notes-link a').click(function() {
        $('html, body').animate({
            scrollTop: $('.notes').offset().top
        }, 600);
    });
    $('.welcome .contact-link a').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 600);
    });

    fadeTop();
});

$(window).resize(function() {
    fadeTop();
});

$(window).on('scroll', function() {
    fadeTop();
});