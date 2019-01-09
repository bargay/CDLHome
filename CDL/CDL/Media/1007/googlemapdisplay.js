var countryCookie = "";
function initDisplay(){
    countryCookie = getCookie("_country");
    //alert(countryCookie);
    var s = document.createElement("script");
    s.async = true;
    s.defer = true;
    
    //console.log(countryCookie);
    if (countryCookie == "China") {
        s.src = "http://maps.google.cn/maps/api/js?key=AIzaSyBp6ju6eHiJUX2cZEIVl3DtZqbIkqXKyJM&amp;libraries=geometry&callback=initialize";
        //s.src = "http://maps.google.cn/maps/api/js?libraries=geometry&callback=initialize";
    }
    else {
        s.src = "https://maps.google.com/maps/api/js?key=AIzaSyBp6ju6eHiJUX2cZEIVl3DtZqbIkqXKyJM&amp;sensor=false&amp;libraries=geometry&callback=initialize";
        //s.src = "https://maps.google.com/maps/api/js?libraries=geometry&callback=initialize";
    }
    
    $("body").append(s);

    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "assets/js/location.js";
    $("body").append(s1);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var path = "path=/";    
    //document.cookie = cname + "=" + cvalue + "; " + expires;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + path;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


$(document).ready(function () {
    initDisplay();
    if (countryCookie != null || countryCookie != "") {
        setCookie("_country", countryCookie, 1);
    }
    else {
        $.getJSON('//freegeoip.net/json/?callback=?', function (data) {
           setCookie("_country", data.country_name, 1);
        });
    }
});



