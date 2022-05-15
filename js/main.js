
$(document).ready(function(){

    $('.header-top-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      });

    //===== shop details slide slick slider
    $('.main-slider-wrapper').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,    
        fade: true,
        asNavFor: '.slider-nav-wrapper'
    });
    $('.slider-nav-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.main-slider-wrapper',
        dots: false,
        centerMode: false,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,            
        responsive: [
            {
              breakpoint: 786,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    //===== Service Active slick slider
    jQuery('.fetured-slider-wrapper').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
        ]
    });
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });
});
