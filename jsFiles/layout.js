window.document.onscroll = function () {
    if (window.pageYOffset > 50) {
        document.getElementsByTagName("HEADER")[0].style.backgroundColor = "black";
    } else {
    }

    if ($(window).scrollTop() > 1) {
        document.getElementsByTagName("HEADER")[0].addClass('active');
    } else {
        document.getElementsByTagName("HEADER")[0].removeClass('active');
    }
};


