function setNavigation() {
    $('.nav-main__menu li').removeClass('active');
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".nav-main__menu li a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}


$(function () {
    setNavigation();
});




document.addEventListener('swup:contentReplaced', event => {

$(function () {
    setNavigation();
});



});

// $('.nav-main__menu li').addClass('active');