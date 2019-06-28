const weatherOb = new XMLHttpRequest();
weatherOb.open("GET","https://api.openweathermap.org/data/2.5/forecast/daily?id=5604473&cnt=4&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true);
weatherOb.send();
weatherOb.onload = function() {
    let weatherData = JSON.parse(weatherOb.responseText);
    console.log(weatherData);

    document.getElementById("currentTemp").innerHTML = weatherData.list[0].main.temp;

    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png"; 
    let desc = weatherData.list[0].weather[0].description;

    document.getElementById("weather_icon").setAttribute("src", icon);
    document.getElementById("weather_icon").setAttribute("alt", desc);
}

