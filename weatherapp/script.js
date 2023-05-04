// Initialize the latitude and longitude variables to 0
let latitude = 0;
let longitude = 0;

// When the page loads, set the current date and check for geolocation support
document.addEventListener("DOMContentLoaded", function() {
  const date = new Date();
  const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(); 
  document.getElementById('date').innerHTML = dateString;

  // If geolocation is supported, get the current position
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    console.log("Geolocation is not available in your browser.");
  }

  // Select the #getWeatherBtn element and add an event listener to it
  const btn = document.querySelector("#getWeatherBtn");
  btn.addEventListener("click", function() {
    // Sample forecast data
    let forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]];
    // Get all elements with the "forecast" class
    let forecastElements = document.getElementsByClassName("forecast");
    // Loop through the forecast data and update each element's HTML with the corresponding data
    for (let i = 0; i < forecast.length; i++) {
      forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0F";
    }
  });
});

// Function to handle successful geolocation
function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(latitude, longitude);
}