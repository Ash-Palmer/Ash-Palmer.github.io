let weatherRequest = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?id=5604473,us&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true );
weatherObject.send();
weatherObject.onload = function() {
    let weatherData = JSON.parse(weatherObject.responseText);
    console.log(weatherData);

    document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
    document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;

    const iconcode = weatherData.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
    
}