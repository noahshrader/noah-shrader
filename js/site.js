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
    $('.welcome .about-link a').click(function() {
        $('html, body').animate({
            scrollTop: $('.info').offset().top
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

    // Project navigation
    $('#nav').onePageNav();

    fadeTop();
    noahScroll();
    scrollEvents();
});

$(window).resize(function() {
    fadeTop();
});

$(window).on('scroll', function() {
    fadeTop();
    noahScroll();
    scrollEvents();
});