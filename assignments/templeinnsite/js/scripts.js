function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const myRequestObject = new XMLHttpRequest();

const myRequestURL = "https://Ash-Palmer.github.io/assignments/templeinnsite/js/templelist.json";

let myTempleInfo;
myRequestObject.open("GET", myRequestURL);
myRequestObject.send();
myRequestObject.onload = function() {
    myTempleInfo = JSON.parse(myRequestObject.responseText);
    console.log(myTempleInfo);

    document.getElementById("bountiful").innerHTML = assembleData(0);
    document.getElementById("cedarcity").innerHTML = assembleData(1);
    document.getElementById("jordanriver").innerHTML = assembleData(2);
    document.getElementById("manti").innerHTML = assembleData(3);
}




function assembleData(x) {
    console.log(myTempleInfo.temple[x]);

    let tInfo = "<h2>"+myTempleInfo.temple[x].name+"</h2>";
    tInfo += "<p>Address: "+myTempleInfo.temple[x].address+"</p>";
    tInfo += "<p>Telephone: "+myTempleInfo.temple[x].telephone+"</p>";
    tInfo += "<p>History: "+myTempleInfo.temple[x].history+"</p>";
    tInfo += "<p>Summary: "+myTempleInfo.temple[x].summary+"</p>";
    tInfo += "<p>Services: "+myTempleInfo.temple[x].services+"</p>";
    tInfo += "<p>Sealing schedule: "+myTempleInfo.temple[x].sealingschedule+"</p>";
    tInfo += "<p>Session schedule: "+myTempleInfo.temple[x].sessionschedule+"</p>";
    tInfo += "<p>Closure: "+myTempleInfo.temple[x].closure+"</p>";
    
    return tInfo;
}