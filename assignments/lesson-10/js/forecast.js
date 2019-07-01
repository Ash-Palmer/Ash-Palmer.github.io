const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(weekday[todayDayNumber]);

let weatherOb = new XMLHttpRequest();
weatherOb.open("GET","//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e85ed115cdda94a41d0669084645767e&units=imperial", true);
weatherOb.send();
weatherOb.onload = function() {
    let weatherData = JSON.parse(weatherOb.responseText);
    console.log(weatherData);

    let list = weatherData.list;
    console.log(list.length);

    let forecastDayNumber = todayDayNumber;
    for (i = 0; i < list.length; i++) {
        var time = list[i].dt_txt;
        console.log(i + "--" + time);

        if (time.includes("18:00:00")) {
            console.log("Noon on day "+i + "--" + time);
            console.log(weatherData.list[i].main.temp);

            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {forecastDayNumber = 0;}
            console.log(forecastDayNumber);

            var theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            console.log(">"+weekday[forecastDayNumber]);

            var theTemp = document.createElement("p");
            theTemp.textContent = weatherData.list[i].main.temp + '\xB0';
            console.log(">"+weatherData.list[i].main.temp);

            var iconcode = weatherData.list[i].weather[0].icon;
            var iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            var theIcon = document.createElement("img");
            theIcon.src = iconPath;

            var theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById("weatherforecast").appendChild(theDay);
        }
    }
}
    





