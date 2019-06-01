var today= new Date();
var weekday= new Array(7);
weekday[0]= "Sunday";
weekday[1]= "Monday";
weekday[2]= "Tuesday";
weekday[3]= "Wednesday";
weekday[4]= "Thursday";
weekday[5]= "Friday";
weekday[6]= "Saturday";
var n = weekday[today.getDay()];

var dd= today.getDate();
document.getElementById("currentdate").innerHTML=dd.getDate();

var mm= new Date();
var months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];
document.getElementById("currentdate").innerHTML=months[mm.getMonth()];

var yyyy= today.getFullYear();
document.getElementById("currentdate").innerHTML=today.getFullYear();





