const weatherOb = new XMLHttpRequest();
weatherOb.open("GET","//api.openweathermap.org/data/2.5/weather?id=5604473&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true);
weatherOb.send();
weatherOb.onload = function() {
    let weatherData = JSON.parse(weatherOb.responseText);
    console.log(weatherData);

    document.getElementById("currentTemp").innerHTML = weatherData.main.temp;

    const iconcode = weatherData.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
}