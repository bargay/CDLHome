var directionsService = new google.maps.DirectionsService();

var infowindow = null;
var global_markers = [];
var global_polygon = [];
var map;
var hotproperty = new google.maps.LatLng(1.3111412013689983, 103.82813954722133);

function initMap() {
    var centermap = new google.maps.LatLng(1.3111412013689983, 103.82813954722133);
    var image_property = 'assets/img/icons/logo_nouvel18.png';
    //alert(image_property);
    var mapDiv = document.getElementById('map_canvas');
    var myOptions = {
        zoom: 17,
        center: centermap,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        icon: image_property
    }

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    //var map = new google.maps.Map(mapDiv, {
    //    zoom: 17,
    //    center: centermap,
    //    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //    icon: 'assets/img/icons/logo_nouvel18.png'
    //});

    var marker_hotproperty = new google.maps.Marker({
        position: hotproperty,
        map: map,
        draggable: false,
        title: 'Nouvel18',
        icon: image_property
    });
    
}
$(document).ready(function () { initMap(); });

function dropSchool() {
    map.setZoom(14);
    map.setCenter(new google.maps.LatLng(1.3111412013689983, 103.82813954722133));

    var schools = [
        ['Raffles Girls\' Secondary School', 1.311246, 103.83032200000002, 1, '<b>Raffles Girls\' Secondary School</b><br><br>20, Anderson Road, Singapore 259978<br>Tel: 6737 1845 &nbsp;&nbsp; Fax: 6235 3731  <br>Web: <a href="http://www.rgs.edu.sg/" target="_blank"  class="gmplink">www.rgs.edu.sg/</a>'],
        ['Chinese International School', 1.320335, 103.829972, 1, '<b>Chinese International School</b><br><br>60 Dunearn Road<br>Tel: 6254 0200  &nbsp;&nbsp; Fax: 6252 5120 <br>Web: <a href="http://www.cnis.edu.sg/" target="_blank"  class="gmplink">www.cnis.edu.sg/</a>'],
        ['Singapore Chinese Girls\' School', 1.321497, 103.82621799999993, 1, '<b>Singapore Chinese Girls\' School</b><br><br>190 Dunearn Road Singapore 309437 <br>Tel: 6252 7966  &nbsp;&nbsp; Fax: 6252 3076  <br>Web: <a href="http://www.scgs.edu.sg" target="_blank"  class="gmplink">www.scgs.edu.sg</a>'],
        ['ISS International School', 1.30209, 103.83077100000003, 1, '<b> ISS International School</b><br><br>25 Paterson Road Singapore 238510<br>Tel: 6235 5844 &nbsp;&nbsp; Fax: 6732 5701<br>Web: <a href="http://www.iss.edu.sg/" target="_blank"  class="gmplink">www.iss.edu.sg</a>'],
        ['Anglo-Chinese School (Barker Road)', 1.32016, 103.83589000000006, 1, '<b>Anglo-Chinese School (Barker Road)</b><br><br>60, Barker Road, Singapore 309919<br>Tel: 6256 1633 &nbsp;&nbsp; Fax: 6256 1366  <br>Web: <a href="http://acsbr.net/" target="_blank"  class="gmplink">acsbr.net</a>'],
        ['Overseas Family School', 1.300359, 103.830964, 1, '<b>Overseas Family School</b><br><br>25F Paterson Road Singapore 238515<br>Tel: 6738 0211&nbsp;&nbsp; Fax: 6733 8825<br>Web: <a href="http://www.ofs.edu.sg/" target="_blank"  class="gmplink">www.ofs.edu.sg</a>'],
        ['Anglo-Chinese Junior School', 1.309087, 103.84129400000006, 1, '<b>Anglo-Chinese Junior School</b><br><br>16 Winstedt Road, Singapore 227988<br>Tel: 6733 7911 &nbsp;&nbsp; Fax: 6734 6518<br>Web: <a href="http://www.acsjunior.sg/" target="_blank"  class="gmplink">www.acsjunior.sg</a>'],
        ['Chatsworth International School', 1.3025134, 103.83909540000002, 1, '<b>Chatsworth International School</b><br><br>37 Emerald Hill Road Singapore 229313<br>Tel: 6737 5955 &nbsp;&nbsp; Fax: 6737 5655<br>Web: <a href="http://www.chatsworth.com.sg/page.cfm?p=356" target="_blank"  class="gmplink">www.chatsworth.com.sg</a>']

    ];

    setMarkers(schools, 'assets/img/icons/icon_school.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Schools & Institutions', schools);
}

function dropEmbassies() {
    map.setZoom(15);
    map.setCenter(new google.maps.LatLng(1.30804, 103.83065999999997));

    var embassies = [
        ['Royal Thai Embassy', 1.30618, 103.83042, 1, '<b>Royal Thai Embassy</b><br><br>370 Orchard Road Singapore 238870<br>Tel: 6737 2158, &nbsp;&nbsp; Fax: 6732 0778  <br>Web: <a href="http://www.thaiembassy.sg/" target="_blank"  class="gmplink">www.thaiembassy.sg</a>'],
        ['British High Commission', 1.30462, 103.82141000000001, 1, '<b>British High Commission</b><br><br>100 Tanglin Road Singapore 247919<br>Tel: 6424 4200 &nbsp;&nbsp; Fax: 6424 4250 <br>Web: <a href="http://ukinsingapore.fco.gov.uk/en/" target="_blank"  class="gmplink">ukinsingapore.fco.gov.uk/en/</a>'],
        ['Australian High Commission ', 1.30602, 103.81993, 1, '<b>Australian High Commission </b><br><br>25 Napier Rd, Singapore<br>Tel: 6836 4100 &nbsp;&nbsp; Fax: 6737 5481  <br>Web: <a href="http://www.australia.org.sg/" target="_blank"  class="gmplink">www.australia.org.sg</a>'],
        ['Embassy of The United States of America', 1.30541, 103.82032000000004, 1, '<b>Embassy of The United States of America</b><br><br>27 Napier Road Singapore 258508<br>Tel: 6476 9100 &nbsp;&nbsp; Fax: 6476 9340 <br>Web: <a href="http://singapore.usembassy.gov/" target="_blank"  class="gmplink">singapore.usembassy.gov</a>'],
        ['Embassy of The People&rsquo;s Republic of China', 1.302994, 103.82056599999999, 1, '<b>Embassy of The People&rsquo;s Republic of China</b><br><br>150 Tanglin Road Singapore 247969<br>Tel: 6418 0252, &nbsp;&nbsp; Fax: 6734 4737 <br>Web: <a href="http://www.chinaembassy.org.sg/eng/" target="_blank"  class="gmplink">www.chinaembassy.org.sg</a>'],
        ['High Commission of India', 1.29947, 103.83427000000006, 1, '<b>High Commission of India</b><br><br>150 Tanglin Road Singapore 247969<br>Tel:6737 6777 , &nbsp;&nbsp; Fax: 6732 6909  <br>Web: <a href="http://www.embassyofindia.com/" target="_blank"  class="gmplink">www.embassyofindia.com</a>']
    ];

    setMarkers(embassies, 'assets/img/icons/icon_embassies.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Embassies', embassies);
}

function dropClubs() {
    map.setZoom(16);
    map.setCenter(new google.maps.LatLng(1.3111412013689983, 103.82813954722133));

    var clubs = [
        ['The Pines Club', 1.31414, 103.82911000000001, 1, '<b>The Pines Club</b><br><br>30 Stevens Road, Singapore 257840<br>Tel: 6735 2288 &nbsp;&nbsp; Fax: 6735 8282 <br>Web: <a href="http://www.thepines.com.sg/" target="_blank"  class="gmplink">www.thepines.com.sg</a>'],
        ['Tanglin Club', 1.31044, 103.83283000000006, 1, '<b>Tanglin Club</b><br><br>5 Stevens Road, Singapore 257814<br>Tel: 6622 0555&nbsp;&nbsp; Fax: 6733 2391 <br>Web: <a href="http://www.tanglinclub.org.sg/" target="_blank"  class="gmplink">www.tanglinclub.org.sg</a>'],
        ['The American Club', 1.308501, 103.83204, 1, '<b>The American Club</b><br><br>10 Claymore Hill Singapore 229573<br>Tel: 6737 3411&nbsp;&nbsp; Fax: 6732 8308 <br>Web: <a href="http://www.amclub.org.sg/" target="_blank"  class="gmplink">www.amclub.org.sg</a>']
    ];

    setMarkers(clubs, 'assets/img/icons/icon_school.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Clubs', clubs);
}

function dropShopping() {
    map.setZoom(15);
    map.setCenter(new google.maps.LatLng(1.308501, 103.83204));

    var shopping_malls = [
        ['Forum The Shopping Mall', 1.306442, 103.82855300000006, 1, '<b>Forum The Shopping Mall</b><br><br>583 Orchard Rd Singapore 238884<br>Tel: 6732 2479 <br>Web: <a href="http://www.forumtheshoppingmall.com.sg/" target="_blank"  class="gmplink">www.forumtheshoppingmall.com.sg/</a>'],
        ['Palais Renaissance', 1.3065034, 103.82949669999994, 1, '<b>Palais Renaissance</b><br><br>390 Orchard Rd<br>Tel: 6737 1520  <br>Web: <a href="http://www.palais.sg/" target="_blank"  class="gmplink">www.palais.sg/</a>'],
        ['Tanglin Shopping Centre', 1.3063129, 103.82662470000002, 1, '<b>Tanglin Shopping Centre</b><br><br>19 Tanglin Road Singapore 247909<br>Tel: 6736 4922  <br>Web: <a href="http://www.tanglinsc.com/" target="_blank"  class="gmplink">www.tanglinsc.com/</a>'],
        ['Tanglin Place', 1.305384, 103.82501100000002, 1, '<b>Tanglin Place</b><br><br>91 Tanglin Road, Singapore 247919 <br>'],
        ['Isetan @ Shaw House', 1.305616, 103.83163200000001, 1, '<b>Isetan @ Shaw House</b><br><br>350 Orchard Road, Singapore 238367<br>Tel: 65 6235 2077  <br>Web: <a href="http://www.shaw.sg/" target="_blank"  class="gmplink">www.shaw.sg/</a>'],
        ['Wheelock Place', 1.30464, 103.83065999999997, 1, '<b>Wheelock Place</b><br><br>501 Orchard Road , Singapore 238880<br>Tel:  6738 8660<br>Web: <a href="http://www.wheelockproperties.com.sg/wheelockplace.html" target="_blank"  class="gmplink">www.wheelockproperties.com.sg/wheelockplace.html</a>'],
        ['Tanglin Mall', 1.30492, 103.82394, 1, '<b>Tanglin Mall</b><br><br>163 Tanglin Road<br>Tel: 6736 4922 <br>Web: <a href="http://www.tanglinmall.com.sg/" target="_blank"  class="gmplink">www.tanglinmall.com.sg/</a>'],
        ['Tangs Plaza', 1.304948, 103.83300099999997, 1, '<b>Tangs Plaza</b><br><br>310 Orchard Road, Singapore 238864<br>Tel: 6737 5500<br>Web: <a href="http://www.tangs.com.sg/" target="_blank"  class="gmplink">www.tangs.com.sg</a>'],
        ['ION Orchard ', 1.303995, 103.83203600000002, 1, '<b>ION Orchard </b><br><br>2 Orchard Turn Singapore 238801<br>Tel: 6238 8228<br>Web: <a href="http://www.ionorchard.com/" target="_blank"  class="gmplink">www.ionorchard.com/</a>'],
        ['Wisma Atria', 1.3038665887866512, 103.83299887151952
, 1, '<b>Wisma Atria</b><br><br>435 Orchard Road Singapore 238877<br>Tel: 6235 8177<br>Web: <a href="http://www.wismaonline.com/" target="_blank"  class="gmplink">www.wismaonline.com/</a>'],
        ['Ngee Ann City', 1.30264, 103.83455000000004
, 1, '<b>Ngee Ann City</b><br><br>391 Orchard Road Singapore 238873<br>Web: <a href="http://www.ngeeanncity.com.sg/" target="_blank"  class="gmplink">www.ngeeanncity.com.sg/</a>'],
        ['The Paragon', 1.3034733, 103.8356602, 1, '<b>The Paragon</b><br><br>290 Orchard Road<br>Tel:6738 5535 <br>Web: <a href="http://www.paragon.com.sg/" target="_blank"  class="gmplink">www.paragon.com.sg</a>'],
        ['Knightsbridge', 1.30319, 103.83628999999996, 1, '<b>Knightsbridge</b><br><br>270 Orchard Road, Singapore 238857<br>Tel: 6593 6999<br>Web: <a href="http://www.knightsbridge.com.sg/" target="_blank"  class="gmplink">www.knightsbridge.com.sg</a>'],
        ['The Heeren', 1.30274, 103.83743000000004, 1, '<b>The Heeren</b><br><br>260 Orchard Road, Singapore 238855<br>Tel: 6733 4725<br>Web: <a href="http://www.chinaembassy.org.sg/" target="_blank"  class="gmplink">www.chinaembassy.org.sg</a>'],
        ['Mandarin Shopping Gallery', 1.3020374, 103.8369702, 1, '<b>Mandarin Shopping Gallery</b><br><br>333 Orchard Road, Singapore<br>Tel:6831 6363 <br>Web: <a href="http://www.mandaringallery.com.sg/" target="_blank"  class="gmplink">www.mandaringallery.com.sg/</a>'],
        ['Orchard Cineleisure', 1.30159, 103.83645999999999, 1, '<b>Orchard Cineleisure</b><br><br>8 Grange Road, Singapore 239695<br>Web: <a href="http://www.cineleisure.com.sg/" target="_blank"  class="gmplink">www.cineleisure.com.sg/</a>'],
        ['313&#64;somerset', 1.300638043227961, 103.8385242220902, 1, '<b>313&#64;somerset</b><br><br>313 Orchard Road, Singapore 238895<br>Tel: 6496 9300&nbsp;&nbsp; Fax: 6496 9301 <br>Web: <a href="http://www.313somerset.com.sg/" target="_blank"  class="gmplink">www.313somerset.com.sg/</a>'],
        ['Centrepoint Shopping Centre', 1.30202, 103.83979999999997, 1, '<b>Centrepoint Shopping Centre</b><br><br>176, Orchard Road, #06-02, Centrepoint Shopping Centre, Singapore 238843<br>Tel: 6737 9000&nbsp;&nbsp; Fax: 6835 3406 <br>Web: <a href="http://www.fraserscentrepointmalls.com/malls/cp/index.asp" target="_blank"  class="gmplink">www.fraserscentrepointmalls.com/malls/cp/</a>']
    ];

    setMarkers(shopping_malls, 'assets/img/icons/icon_shopping.png');
    infowindow = new google.maps.InfoWindow({

        content: "loading..."
    });

    // show listing in sidebar
    showList('Shopping Centres & Markets', shopping_malls);
}

function dropHospitals() {
    map.setZoom(15);
    map.setCenter(new google.maps.LatLng(1.3111412013689983, 103.82813954722133));

    var hospitals = [
        ['Gleneagles Hospital', 1.30752, 103.82034999999996, 1, '<b>Gleneagles Hospital</b><br><br>6A Napier Road Singapore 258500<br>Tel: 6473 7222 &nbsp;&nbsp; Fax: 6470 5616<br>Web: <a href="http://www.parkwayhealth.com/hospitals/gleneagles_hospital/" target="_blank"  class="gmplink">www.parkwayhealth.com/hospitals/gleneagles_hospital/</a>'],
        ['Camden Medical Centre', 1.30305, 103.82385299999999, 1, '<b>Camden Medical Centre</b><br><br>1 Orchard Boulevard, Camden Medical Centre, Singapore 248649<br>Tel: 6887 3210<br>Web: <a href="http://www.camdenmedical.com/" target="_blank"  class="gmplink">www.camdenmedical.com</a>'],
        ['Mt Elizabeth Hospital', 1.30498, 103.83582000000001, 1, '<b>Mt Elizabeth Hospital</b><br><br>3 Mount Elizabeth Singapore 228510<br>Tel: 65 6737 2666  &nbsp;&nbsp; Fax: 65 6734 0518<br>Web: <a href="http://www.camdenmedical.com/" target="_blank"  class="gmplink">www.camdenmedical.com</a>']
    ];

    setMarkers(hospitals, 'assets/img/icons/icon_hospital.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Hospitals', hospitals);
}

function dropFood() {
    map.setZoom(14);
    map.setCenter(new google.maps.LatLng(1.3116892304285531, 103.82791398889552));

    var food = [
        ['Newton Hawker Centre', 1.312038, 103.839293, 1, '<b>Newton Hawker Centre</b><br><br>500 Clemenceau Ave, Singapore 229495<br>Tel: 6473 7222 &nbsp;&nbsp; Fax: 6470 5616<br>'],
        ['Dempsey Hill @ Tanglin Village', 1.3033085, 103.80985190000001, 1, '<b>Dempsey Hill @ Tanglin Village</b><br><br>Blk 8D, Dempsey Road, Singapore 249679<br>']
    ];

    setMarkers(food, 'assets/img/icons/icon_food.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Food', food);
}

function dropHotels() {
    map.setZoom(15);
    map.setCenter(new google.maps.LatLng(1.3088882304284327, 103.83591398888548));
    
    var hotels = [
        ['Shangri-La Hotel', 1.3108046, 103.82679819999998, 1, '<b>Shangri-La Hotel</b><br><br>22 Orange Grove Road, Singapore 258350<br>Tel: 6737 3644&nbsp;&nbsp; Fax: 6737 3257<br>Web: <a href="http://www.shangri-la.com/en/property/singapore/shangrila" target="_blank"  class="gmplink">www.shangri-la.com/en/property/singapore/shangrila</a>'],
        ['Orchard Hotel ', 1.30756, 103.82873999999993, 1, '<b>Orchard Hotel </b><br><br>442 Orchard Road, Singapore 238879 <br>Tel: 6734 7766  &nbsp;&nbsp; Fax: 6733 5482<br>Web: <a href="http://www.millenniumhotels.com.sg/orchardhotelsingapore/index.html" target="_blank"  class="gmplink">http://www.millenniumhotels.com.sg/orchardhotelsingapore/index.html</a>'],
        ['Hilton Hotel', 1.305971, 103.82941400000004, 1, '<b>Hilton Hotel</b><br><br>581 Orchard Road, Singapore, Singapore 238883<br>Tel: 6737 2233 &nbsp;&nbsp; Fax: 6732 2917<br>Web: <a href="http://www.hilton.com/Singapore" target="_blank"  class="gmplink">www.hilton.com/Singapore  </a>'],
        ['Four Seasons Hotel', 1.3054959, 103.82731590000003, 1, '<b>Four Seasons Hotel</b><br><br>190 Orchard Boulevard, Singapore 248646<br>Tel:  6734 1110&nbsp;&nbsp; Fax: 6733 0682<br>Web: <a href="http://www.fourseasons.com/singapore/" target="_blank"  class="gmplink">www.fourseasons.com/singapore/</a>'],
        ['St Regis Singapore', 1.3056744, 103.82551779999994, 1, '<b>St Regis Singapore </b><br><br>29 Tanglin Road, Singapore 247911 <br>Tel: 6736 7700 &nbsp;&nbsp;<br>Web: <a href="http://www.starwoodhotels.com/stregis/index.html" target="_blank"  class="gmplink">http://www.millenniumhotels.com.sg/orchardhotelsingapore/index.html</a>'],
        ['Royal Plaza ', 1.307019, 103.83252300000004, 1, '<b>Royal Plaza </b><br><br>25 Scotts Road, Singapore 228220<br>Tel: 6737 7966&nbsp;&nbsp; Fax: 6737 6646<br>Web: <a href="http://www.royalplaza.com.sg/" target="_blank"  class="gmplink">www.royalplaza.com.sg</a>'],
        ['Grand Hyatt Hotel ', 1.30633, 103.83299, 1, '<b>Grand Hyatt Hotel</b><br><br>10 Scotts Road, Singapore 228211<br>Tel: 6738 1234   &nbsp;&nbsp; Fax: 6732 1696<br>Web: <a href="http://singapore.grand.hyatt.com/hyatt/hotels/index.jsp?null" target="_blank"  class="gmplink">singapore.grand.hyatt.com</a>'],
        ['Regent Hotel', 1.304782, 103.82522100000006, 1, '<b>Regent Hotel</b><br><br>1 Cuscaden Road, Singapore 249715<br>Tel:  6733 8888&nbsp;&nbsp; Fax: 6732 8838<br>Web: <a href="http://www.regenthotels.com/singapore-hotel-sg-249715/risin/" class="gmplink" target="_blank">www.regenthotels.com/singapore-hotel-sg-249715/risin/</a>'],
        ['Goodwood Park Hotel ', 1.307716, 103.834564, 1, '<b>Goodwood Park Hotel </b><br><br>22 Scotts Road, Singapore 228221<br>Tel: 6737 7411  &nbsp;&nbsp; Fax: 6732 8558<br>Web: <a href="http://www.goodwoodparkhotel.com/" target="_blank"  class="gmplink">www.goodwoodparkhotel.com</a>'],
        ['Marriott Hotel', 1.30507, 103.83312000000001, 1, '<b>Marriott Hotel</b><br><br>320 Orchard Road, Singapore 238865<br>Tel:  6735 5800   &nbsp;&nbsp; Fax: 6735 9800<br>Web: <a href="http://www.marriott.com/hotels/travel/sindt-singapore-marriott-hotel/" target="_blank"  class="gmplink">www.marriott.com/hotels/travel/sindt-singapore-marriott-hotel/</a>'],
        ['Pan Pacific Suites', 1.30099, 103.83799999999997, 1, '<b>Pan Pacific Suites</b><br><br>96 Somerset Road, Singapore 238163<br>Tel: 6884 5222 &nbsp;&nbsp; Fax: 6884 5125<br>Web: <a href="http://www.panpacific.com/servicedsuites/Overview.html" target="_blank"  class="gmplink"> www.panpacific.com/servicedsuites/Overview.html</a>']
    ];

    setMarkers(hotels, 'assets/img/icons/icon_hotels.png');
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // show listing in sidebar
    showList('Hotels', hotels);
}

function showList(listLable, markers) {
    listHTML = '<span>';
    listHTML += '<b>' + listLable + '</b><ol>';

    for (var i = 0; i < markers.length; i++) {
        var sites = markers[i];
        var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);

        // Geometry library has to be manually loaded http://maps.google.com/maps/api/js?libraries=geometry&sensor=false
        // and it calculates direct line between two objects
        var distance = google.maps.geometry.spherical.computeDistanceBetween(hotproperty, siteLatLng);
        distance = Math.round(distance);

        // distance is in meter, format to km
        if (distance >= 1000) {
            distance = distance / 1000;
            distance = distance.toFixed(2);
            distance += 'km';
        }
        else {
            distance += 'm'
        }

        listHTML += '<li><a href="javascript:showPlace(' + i + ')">' + sites[0] + '</a>&nbsp;&nbsp;(' + distance + ')</li>';
    }

    listHTML += '</ol></span>';

    $('#sidebar').html(listHTML);
}

function showPlace(i) {
    google.maps.event.trigger(global_markers[i], "click");
}

function calcRoute(start, end) {
    // directionsService is asynchronous, thus cannot return value
    // need to use a handler to handle it

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            //directionsDisplay.setDirections(response);
            //alert("Distance: " + response.routes[0].legs[0].distance.value + " meters");
            //alert("Estimated Travel Time: " + response.routes[0].legs[0].duration.value + " seconds");
            var distance = response.routes[0].legs[0].distance.value;
            //alert(distance);

            distance = 32;
            return distance;
        }
    });
}

function setMarkers(markers, icon_image) {
    // clear all markers before setting
    clearMarkers();
    alert(markers.length);
    for (var i = 0; i < markers.length; i++) {
        var sites = markers[i];
        
        // if the array specify custom image
        if (sites.length == 6) {
            local_icon_image = sites[5];
        }
        else {
            local_icon_image = icon_image;
        }

        // temporary solution
        if (sites[0] == 'Chong Pang Market & Food Centre') {
            local_icon_image = 'assets/img/icons/icon_market.png';
        }

        var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
        var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            title: sites[0],
            zIndex: sites[3],
            html: sites[4],
            icon: local_icon_image,
            animation: google.maps.Animation.DROP
        });

        global_markers.push(marker);

        var contentString = "Some content";

        google.maps.event.addListener(marker, "click", function () {
            //alert(this.html);
            //infowindow.setOptions({maxWidth:400});
            infowindow.setContent('<div width="500px" style="font-family: Arial; font-size: 12px">' + this.html + '</div>');
            infowindow.open(map, this);

        });
    }
}

function clearMarkers() {
    while (global_markers[0]) {
        global_markers.pop().setMap(null);
        // need to empty the sidebar
        $('#sidebar').html('');
    }

    while (global_polygon[0]) {
        global_polygon.pop().setMap(null);
    }
}




