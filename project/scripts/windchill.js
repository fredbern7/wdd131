let temperature = parseInt(document.getElementById("temperature").textContent.replace(/[^0-9.\-]/g, ""));

let windSpeed = parseInt(document.getElementById("wind").textContent.replace(/[^0-9.\-]/g, ""));


const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

let windchill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windchill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} 
console.log(windchill)

document.querySelector("#windchill").textContent = windchill;