/* Google Map */
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: {
            lat: 59.6119248,
            lng: 16.5447214
        }
    });
/* Map Markers and information */
/* Map Markers and information string 1 */
            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Djäkneberget park</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Djäkneberget</b> is a park area directly west of the inner city of Västerås.'+ 
            'The area is about 500 meters long and 250 meters wide (about twelve hectares).'+ 
            'The park is located on a hilltop with views of the Cathedral, '+
            'Stadshuset, Skrapan and part of Lake Mälaren. Adjacent to the park is Djäknebergsskolan, '+
            'a public school that calls for 1894 and which today houses Västerås Folk High School '+
            'and Västerås Art School.</p>'+
            '<p>Attribution: Djäkneberget, (translated to english) <a href="https://sv.wikipedia.org/wiki/Dj%C3%A4kneberget">'+
            'https://sv.wikipedia.org/wiki/Dj%C3%A4kneberget</a> '+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        var image = 'http://victoriapben.com/wp-content/uploads/2020/03/nature.jpg';
        var marker = new google.maps.Marker({
          position: { lat: 59.61153, lng: 16.530734 },
          map: map,
          icon: image,
          title: 'Djäkneberget'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });



    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });}