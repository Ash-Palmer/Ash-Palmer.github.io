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

    let icon3 = "https://openweathermap.org/img/w/" + weatherData.list[23].weather[0].icon + ".png"; 
    let desc3 = weatherData.list[23].weather[0].description;

    document.getElementById("weather_icon3").setAttribute("src", icon3);
    document.getElementById("weather_icon3").setAttribute("alt", desc3);

    let icon4 = "https://openweathermap.org/img/w/" + weatherData.list[31].weather[0].icon + ".png"; 
    let desc4 = weatherData.list[31].weather[0].description;

    document.getElementById("weather_icon4").setAttribute("src", icon4);
    document.getElementById("weather_icon4").setAttribute("alt", desc4);

    let icon5 = "https://openweathermap.org/img/w/" + weatherData.list[39].weather[0].icon + ".png"; 
    let desc5 = weatherData.list[39].weather[0].description;

    document.getElementById("weather_icon5").setAttribute("src", icon5);
    document.getElementById("weather_icon5").setAttribute("alt", desc5);
}

function dayOfWeek() {
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;
}


