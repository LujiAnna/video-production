//Use js plugins to do stuff or google for jquery snippets


$(document).ready(function () { //select document
    //    try out sticky navigation
    //    $('h1').click(function() {
    //        $(this).css('background-color', '#ff0000');
    //    })

    //    var waypoints = $('#handler-first').waypoint(function(direction) {
    //  notify(this.element.id + ' hit 25% from top of window') 
    //}, {
    //  offset: '25%'
    //})

    //    Sticky Navigation: code from PLUGIN
    //    direction: up or down
    $('.js--section-features').waypoint(function (direction) { //select class
        if (direction == 'down') {
            //            remove sticky class from nav
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky');
        }
        //            happens 60px before we hit this section

    }, {
        offset: '60px;'
    });

    //    Scroll on buttons - SELF code
    $('.js--scroll-to-plans').click(function () { //select class and event method
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000); //select html&body, and section
    });

    //    Scroll on buttons
    $('.js--scroll-to-start').click(function () { //select class and event method
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000); //select html&body, and section, 1000 unit is 1second
    });

    //    Navigation scroll - code from SOMEONE ELSE
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    //    Animations on scroll 
    //    doesnt work -- try this css animation in html w/o using jquery!!!
    // $('.js--wp-1').waypoint(function(direction){ //we wont use direction
    //     $('.js--wp-1').addClass$('animate__animated animate__fadeIn');       
    // }, {
    //     offset: '50'
    // });
    // $('.js--wp-2').waypoint(function(direction){ //we wont use direction
    //     $('.js--wp-2').addClass$('animate__animated animate__fadeInUp');       
    // }, {
    //     offset: '50'
    // });
    // $('.js--wp-3').waypoint(function(direction){ //we wont use direction
    //     $('.js--wp-3').addClass$('animate__animated animate__fadeIn');       
    // }, {
    //     offset: '50'
    // });
    // $('.js--wp-4').waypoint(function(direction){ //we wont use direction
    //     $('.js--wp-4').addClass$('animate__animated animate__pulse');       
    // }, {
    //     offset: '50'
    // });

    // mobile navigation
    // slideToggle - CODE from: JQUERY METHOD
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);

        // change the icon from i class='ion-navicon-round',  to ion-close-round, using add/remove class methods
        var icon = $('.js--nav-icon i');

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });



});