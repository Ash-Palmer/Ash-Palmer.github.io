function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const myRequestObject = new XMLHttpRequest();

const myRequestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

let myWeatherInfo;
myRequestObject.open("Get", myRequestURL);
myRequestObject.send();
myRequestObject.onload = function() {
    myWeatherInfo = JSON.parse(myRequestObject.responseText);
    console.log(myWeatherInfo);

    document.getElementById("fish").innerHTML = assembleData(1);
    document.getElementById("preston").innerHTML = assembleData(4);
    document.getElementById("soda").innerHTML = assembleData(5);
}

function assembleData(x) {
    console.log(myWeatherInfo.towns[x]);

    let townInfo = "<h2>"+myWeatherInfo.towns[x].name+"</h2>";
    townInfo += "<i>"+myWeatherInfo.towns[x].motto+"</i>";
    townInfo += "<p>Year founded: "+myWeatherInfo.towns[x].yearFounded+"</p>";
    townInfo += "<p>Current population: "+myWeatherInfo.towns[x].currentPopulation+"</p>";
    townInfo += "<p>Average rainfall: "+myWeatherInfo.towns[x].averageRainfall+"</p>";

    return townInfo;
}