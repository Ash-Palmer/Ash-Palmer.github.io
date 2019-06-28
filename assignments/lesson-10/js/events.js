const myRequestObject = new XMLHttpRequest();
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
    

    myRequestObject.open("GET", requestURL);
    myRequestObject.responseType = "json";
    myRequestObject.send();

    myRequestObject.onload = function() {
       var Tevents = myRequestObject.response;
       document.getElementById("Fname").innerHTML = Tevents.towns[1].name;
       document.getElementById("Fevent").innerHTML = Tevents.towns[1].events;

       document.getElementById("Pname").innerHTML = Tevents.towns[4].name;
       document.getElementById("Pevent").innerHTML = Tevents.towns[4].events;

       document.getElementById("Sname").innerHTML = Tevents.towns[5].name;
       document.getElementById("Sevent").innerHTML = Tevents.towns[5].events;
    }
        
