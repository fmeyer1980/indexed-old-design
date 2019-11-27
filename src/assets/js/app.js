import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';


const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: true,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        }),
        new SwupPreloadPlugin(),
        new SwupHeadPlugin(),
        new SwupBodyClassPlugin()
    ]
});

function setNavigation() {
    $('.main-menu li').removeClass('active');
    
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".main-menu li a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });

    // var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    //  $('main-menu li a').each(function() {
    //   if (this.href === path) {
    //     $(this).closest('li').addClass('active');
    //   }
    //  });
}

$(function () {
    setNavigation();
});

document.addEventListener('swup:contentReplaced', event => {
    $(function () {
        setNavigation();
    });
});
