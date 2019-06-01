


var dd= today.getDate();
document.getElementById("currentdate").innerHTML=dd.getDate();

var mm= new Date();
var months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];
document.getElementById("currentdate").innerHTML=months[mm.getMonth()];

var yyyy= today.getFullYear();
document.getElementById("currentdate").innerHTML=today.getFullYear();





