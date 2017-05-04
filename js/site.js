function fadeTop() {
    var div = $('.welcome');
    var st = $(this).scrollTop();
    div.css({ 'opacity' : (1 - st/320) });
    if((div).css('opacity') <= 0) {
        div.addClass('hide');
    } else {
        div.removeClass('hide');
    }
}

function noahScroll() {
    scrollPos = $(this).scrollTop();
    $('.noah').css({
        'background-position' : '50% ' + (-scrollPos/40 + 20) + "px"
    });
}

function atTop() {
    var distance = $('.projects').offset().top,
        $window = $(window);
    if ($window.scrollTop() >= distance) {
        $('.project-nav').addClass('active');
    } else {
        $('.project-nav').removeClass('active');
    }
}

function atBottom() {
    var distance = $('.project-feature.last').offset().top,
        $window = $(window);
    if ($window.scrollTop() >= distance) {
        $('.project-nav').addClass('hide');
    } else {
        $('.project-nav').removeClass('hide');
    }
}

$(function() {

    // Top navigation scroll
    $('.welcome .work-link').click(function() {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 600);
    });
    $('.welcome .notes-link').click(function() {
        $('html, body').animate({
            scrollTop: $('.notes').offset().top
        }, 600);
    });
    $('.welcome .contact-link').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 600);
    });

    // Project navigation
    $('#nav').onePageNav();

    fadeTop();
    noahScroll();
    atTop();
    atBottom();
    $(window).scroll();
});

$(window).on('scroll', function() {
    fadeTop();
    noahScroll();
    atTop();
    atBottom();
});