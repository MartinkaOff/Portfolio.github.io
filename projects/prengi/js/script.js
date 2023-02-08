$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        prevArrow: '<a class="slick-prev"></a>',
        nextArrow: '<a class="slick-next"></a>'
    });
    $('.present__wrapper').slick({
        dots: true,
        slidesToShow: 1,
        dotsClass: 'present__dots',
        prevArrow: '<a class="slick-prev"></a>',
        nextArrow: '<a class="slick-next"></a>'
    });

    $('ul.present__tabs').on('click', 'li:not(.present__tab_active)', function() {
        $(this).addClass('present__tab_active').siblings().removeClass('present__tab_active')
    });
    $('#slick-slide-control10').html('Prengi Production');
    $('#slick-slide-control11').html('Prengi FMC');
    $('#slick-slide-control12').html('Prengi Mallz Retail');
    $('#slick-slide-control13').html('Prengi Logistic');
    $('#slick-slide-control14').html('Prengi IT');
    $('#slick-slide-control15').html('Prengi HR').css('border', 'none');
});