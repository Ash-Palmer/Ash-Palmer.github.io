const weatherOb = new XMLHttpRequest();
weatherOb.open("GET","https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true);
weatherOb.send();
weatherOb.onload = function() {
    let weatherData = JSON.parse(weatherOb.responseText);
    console.log(weatherData);

    document.getElementById("currentTemp").innerHTML = weatherData.list[7].main.temp;
    document.getElementById("temp2").innerHTML = weatherData.list[15].main.temp;
    document.getElementById("temp3").innerHTML = weatherData.list[23].main.temp;
    document.getElementById("temp4").innerHTML = weatherData.list[31].main.temp;
    document.getElementById("temp5").innerHTML = weatherData.list[39].main.temp;


    let icon = "https://openweathermap.org/img/w/" + weatherData.list[7].weather[0].icon + ".png"; 
    let desc = weatherData.list[7].weather[0].description;

    document.getElementById("weather_icon").setAttribute("src", icon);
    document.getElementById("weather_icon").setAttribute("alt", desc);

    let icon2 = "https://openweathermap.org/img/w/" + weatherData.list[15].weather[0].icon + ".png"; 
    let desc2 = weatherData.list[15].weather[0].description;

    document.getElementById("weather_icon2").setAttribute("src", icon2);
    document.getElementById("weather_icon2").setAttribute("alt", desc2);
}

