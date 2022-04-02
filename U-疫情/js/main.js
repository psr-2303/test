$(function () {
    var nav = $('.nav');
    var win = $('.window');
    var sc = $(document);
    win.scroll(function () {
        if (sc.scrollTop() >= 100) {
            nav.addClass('nav-fixed');
        } else {
            nav.removeClass('nav-fixed');
        }
    })

})



