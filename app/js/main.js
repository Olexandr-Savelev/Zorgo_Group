$('.certificates__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    swipeToSlide: true,
    prevArrow: '<button type="button" class="certificates__slider-arrows certificates__slider-arrowprev"><img src="../images/arrowPrev.svg"></img></button>',
    nextArrow: '<button type="button" class="certificates__slider-arrows certificates__slider-arrownext"><img src="../images/arrowNext.svg"></img></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.reviews__slider').slick({
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="reviews__slider-arrows reviews__slider-arrow-prev"><img src="../images/arrowPrev2.svg"></img></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrows reviews__slider-arrow-next"><img src="../images/arrowNext2.svg"></img></button>',
    centerMode: true,
    centerPadding: '100px',
});