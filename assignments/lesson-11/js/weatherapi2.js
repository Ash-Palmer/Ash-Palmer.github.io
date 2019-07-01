const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
    let weatherData = JSON.parse(weatherObject.responseText);
    console.log(weatherData);

    document.getElementById("current").innerHTML = weatherData.weather[0].description;
    document.getElementById("maxTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("wind speed").innerHTML = weatherData.wind.speed;
}