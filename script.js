$(document).ready(function(){
    'use strict';
    function loadMap() {
    var center = new google.maps.LatLng(49.568819, 34.585753);
        var marker = new google.maps.Marker({
            position: center,
            draggable:true,
            icon:'img/favicon.png',
            title:'Click to zoom',
            // animation: google.maps.Animation.BOUNCE
        });
        var mapOptions = {
            center: center,
            zoom:15,
            disableDefaultUI: true,
         };
        var infowindow = new google.maps.InfoWindow({
            content:"My town"
        });

        google.maps.event.addListener(marker,'click',function() {
            infowindow.open(map,marker);
        });
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        marker.setMap(map);

    }
    loadMap();

    //Isotop
    $('.button-group button').click(function () {
        $('.hidden').removeClass("hidden");
    });
    //переключение Табов

    $('div .tabs').click(function () {
        if (!$(this).hasClass('is-checked')) {
            $('.tabs.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        }
    });

    var $isotopeGrid = $('.grid');

    $isotopeGrid.isotope({
        itemSelector: '.element-item',
        percentPosition: true
    });
    $('.filters-button-group button').click(function () {
        var filterValue = $(this).data('filter');
        console.log(filterValue);
        $isotopeGrid.isotope({
            filter: filterValue
        });
    });

//    Slick-slider

    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        lazyLoad: 'ondemand'

    });
});

