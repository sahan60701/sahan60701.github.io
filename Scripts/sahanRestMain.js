$(document).on("pageinit", "#contact", function () {

    var defaultLatLng = new google.maps.LatLng(-37.864945, 145.094322);

    drawMap(defaultLatLng);

    function drawMap(latlng) {
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);


        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "2A Closer Avenue, Ashwood, VIC 3147"
        });
    }
});