const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=72756,us&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true );
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
    
}