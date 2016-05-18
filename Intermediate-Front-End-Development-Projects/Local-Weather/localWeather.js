var APPID = "30c5aef8db55a45b005cbeb5a82c42a7"; 
var temp; 
var loc; 
var humid;  
var current; 
var icon; 

function updateByZip(zip) {
  var url = "http://api.openweathermap.org/data/2.5/weather?" +
      "zip=" + zip +
      "&APPID=" + APPID; 
  sendRequest(url); 
}

function updateByGeo(lat, lon) {
  var url = "http://api.openweathermap.org/data/2.5/weather?" +
      "lat=" + lat +
      "&lon=" + lon +
      "&APPID=" + APPID;
  sendRequest(url); 
}

function sendRequest(url) { 
  var xhr = new XMLHttpRequest(); 
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText); 
      var weather = {}; 
      weather.temp = KtoFahrenheit(data.main.temp); 
      weather.loc = data.name; 
      weather.humid = data.main.humidity; 
      weather.current = data.weather[0].description; 
      weather.icon = data.weather[0].icon; 
      update(weather); 
    }
  }; 
  xhr.open("GET", url, true); 
  xhr.send(); 
}

function KtoCelsius(k) {
  return Math.round(k - 273.15) + "&deg; C"; 
}

function KtoFahrenheit(k) {
  return Math.round(k*(9/5)-459.67) + "&deg; F"; 
}

function update(weather) {
  temp.innerHTML = weather.temp; 
  loc.innerHTML = weather.loc; 
  humid.innerHTML = weather.humid; 
  current.innerHTML = weather.current; 
  icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png"; 
}

function showPosition(position) {
  updateByGeo(position.coords.latitude, position.coords.longitude); 
}

window.onload = function () { 
  temp = document.getElementById("temperature"); 
  loc = document.getElementById("location"); 
  humid = document.getElementById("humidity");  
  current = document.getElementById("current-weather"); 
  icon = document.getElementById("icon"); 
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition); 
  } else {
    var zip = window.prompt("Location is not available. Please enter your zip code."); 
    updateByZip(zip); 
  }
}
