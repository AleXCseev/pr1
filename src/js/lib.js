$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        variableWidth: true
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    // $('.slider').on('swipe', function(event, slick, direction){
    //     console.log(direction);
    //     // left
    //   });
    console.log($(".slick-active").siblings())
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // console.log(currentSlide);
    });

    // $('.reviews').slick({
    //     slidesToShow: 3,
    //     dots: true,
    //     slidesToScroll: 1,
    //     infinite: true,
    // });

});
