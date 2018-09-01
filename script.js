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
            zoom:12,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position:google.maps.ControlPosition.LEFT_BOTTOM
            },
            mapTypeControl: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,

        };
        var infowindow = new google.maps.InfoWindow({
            content:"My town"
        });

        google.maps.event.addListener(marker,'click',function() {
            infowindow.open(map,marker);
        });
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        marker.setMap(map);


        // google.maps.event.addDomListener(window, 'load', loadMap);
    }


    loadMap();
});

