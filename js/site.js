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

function scrollEvents() {
    var distancetop = $('.projects').offset().top,
        distancelast = $('.project-feature.last').offset().top,
        pkradiodistance = $('#pkradio').offset().top - 550,
        tagticiandistance = $('#tagtician').offset().top - 550,
        pullrdistance = $('#pullr').offset().top - 550,
        $window = $(window);
    // Top of container
    if ($window.scrollTop() >= distancetop) {
        $('.project-nav').addClass('active');
    } else {
        $('.project-nav').removeClass('active');
    }
    // PK Radio
    if ($window.scrollTop() >= pkradiodistance) {
        $('.project-nav').addClass('pkradio');
    } else {
        $('.project-nav').removeClass('pkradio');
    }
    // Tagtician
    if ($window.scrollTop() >= tagticiandistance) {
        $('.project-nav').addClass('tagtician');
    } else {
        $('.project-nav').removeClass('tagtician');
    }
    // Pullr
    if ($window.scrollTop() >= pullrdistance) {
        $('.project-nav').addClass('pullr');
    } else {
        $('.project-nav').removeClass('pullr');
    }
    // Bottom of container
    if ($window.scrollTop() >= distancelast) {
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
    scrollEvents();
});

$(window).on('scroll', function() {
    fadeTop();
    noahScroll();
    scrollEvents();
});