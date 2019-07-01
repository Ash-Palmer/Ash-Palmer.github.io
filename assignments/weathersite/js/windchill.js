let t = parseInt(document.getElementById("maxTemp").innerHTML);

let s = parseInt(document.getElementById("wind speed").innerHTML);

let result = 35.74 + (0.6215*t) - (35.75 * (s * 0.16)) + (0.4275 * t * (s*0.16));

document.getElementById("output").innerHTML = result;











