function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14, 
        center: {
            lat: 59.6119248,
            lng: 16.5447214
        }
    });
    var infoWindow = new google.maps.InfoWindow();
    var latlngbounds = new google.maps.LatLngBounds();


 /* Map images */
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var image = 'http://victoriapben.com/wp-content/uploads/2020/03/camera.jpg';

    var image3 = 'http://victoriapben.com/wp-content/uploads/2020/03/vasaparken-vasteras@2x.png';
    var image4 = 'http://victoriapben.com/wp-content/uploads/2020/03/vasteras_slott@2x.png';
    var image5 = 'http://victoriapben.com/wp-content/uploads/2020/03/vasteras_radhus@2x.png';
    var image6 = 'http://victoriapben.com/wp-content/uploads/2020/03/Djakneberget@2x.png';
    var iamge7 = 'http://victoriapben.com/wp-content/uploads/2020/03/Turbinhuset_vasteras@2x.png';

 /* Map locations */
    var locations = [
       { lat: 59.61153, lng: 16.530734,
        title: 'Nature', 
        name:'Djäkneberget park: ',
        description: 'Djäkneberget is a park area just west of downtown Västerås. The area is about 500 meters long and 250 meters wide (about twelve hectares). The park is located on a hilltop with views of the Cathedral, Stadshuset, Skrapan and part of Lake Mälaren, among others. ',
        image: image6,
        icon: image,
        },
        { lat: 59.6074259, lng: 16.5468998,
        title: 'Nature', 
        name:'Vasaparken/Vasa Park: ',
        description: 'Vasaparken is the largest park in central Västerås in Västmanland. It is framed by the City Hall, the Concert Hall, the Central Station, Södra Ringvägen, the Castle and the City Hall.',
        image: image3,
        icon: image,
        },
        { lat: 59.606668, lng: 16.544300,
        title: 'Architecture', 
        name:'Västerås slott/Västerås Castle: ',
        description: 'Västerås Castle is a castle building located in Västerås adjacent to the mouth of Svartån and was a royal residence during the Vaasa period. The castle was rebuilt during the 1100s, but in 1540-1544 it was rebuilt by Gustav Vasa. ',
        image: image4,
        icon: image,
        },
        { lat: 59.607656, lng: 16.545727,
        title: 'Architecture', 
        name:'Västerås Rådhus/Västerås City Hall: ',
        description: 'Västerås City Hall is a building at Fiskartorget in central Västerås. The house was built in 1860. ',
        image: image5,
        icon: image, 
        },
        { lat: 59.607211, lng: 16.544761,
        title: 'Architecture', 
        name:'Västerås Rådhus/Västerås City Hall: ',
        description: 'The turbine house in Västerås is a facility for the production of electricity. The house is located between Västerås City Hall and Västerås Castle and is said to be one of the reasons why ASEA moved to Västerås. ',
        image: iamge7,
        icon: image, 
        },

    ];
  
 /* Function for Info Windows on the Map */
    for (var i = 0; i < locations.length; i++) {
        var data = locations[i]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image,
            title: data.title,
            });
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent("<div style = 'width:250px;height:260px'>" + data.name + data.description + "<div style = 'width:250px;height:250px'>" + "<img src=" + data.image + ">" + "</div>" + "</div>");
                infoWindow.open(map, marker);
                });
            })(marker, data);
            latlngbounds.extend(marker.position);
        }
        var bounds = new google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);

    }