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
});

