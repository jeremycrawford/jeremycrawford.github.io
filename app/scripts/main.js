console.log('\'Allo \'Allo!');

$("#work-btn").click(function() {
    $('body').animate({
        scrollTop: $("#work").offset().top
    }, 1250);
});

$("#about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 750);
});

$("#scroll-up-btn").click(function() {
    $('html, body').animate({
        scrollTop: 0}, 500);
});