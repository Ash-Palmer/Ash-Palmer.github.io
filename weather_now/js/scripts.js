const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=72756,us&appid=e85ed115cdda94a41d0669084645767e", true );
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
}