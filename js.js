// Won't work on codepen unless codepen's address is HTTP, not HTTPS

var API_KEY = "4334fcbdc100f11d073ef2fc6017110f";

$(function(){

  var loc;

  $.getJSON('https://ipinfo.io', function(d){
    console.log("Assigning the data")
    loc = d.loc.split(",");
    console.log(loc);


  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
   + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(wd){
      console.log("got the data,", wd);
          var currentLocation = wd.name;
          var currentWeather = wd.weather[0].description;
          var currentTemp = wd.main.temp;
          var high = wd.main.temp_max;
          var low = wd.main.temp_min;

          $('#currentLocation').html(currentLocation);
          $('#currentTemp').html(currentTemp + '&#8457');
          $('#currentWeather').html(currentWeather);


      })

   })

})
