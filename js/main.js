$(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="prev next"></button>',
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false
            }
        }]
    });
});