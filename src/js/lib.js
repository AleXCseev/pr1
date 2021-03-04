$(document).ready(function () {
    $('.slider__1').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: ".control-1",
        appendDots: ".control-1",
        useCss: true,
        useTransform: true,
        rows: 1,
    });

    $('.slider__1').on('afterChange', function (event, slick, currentSlide, nextSlide) {

    });

    $('.slider__2').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: ".control-2",
        appendDots: ".control-2"
    });

    $('.reviews').slick({
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: ".control-3",
        appendDots: ".control-3"
    });

});
