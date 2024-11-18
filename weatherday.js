const temperature = document.getElementById('temperature');
const weathertemp = document.getElementById('weather-temps');
const weatherHumidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windkph');
const gust = document.getElementById('gustkph');
const felslike = document.getElementById('feels');
const feelsgap = document.getElementById('feelGap');

const weatherKey = 'c3e36d91b00b4958b7284918241211';
const weathercity = 'Marseille';
const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json?key=c3e36d91b00b4958b7284918241211&q=Marseille&aqi=no';

function getCharacters(str, length) {
    // Vérifie que la longueur demandée est valide
    if (length <= 0 || length > str.length) {
        return "Longueur invalide";
    }
    return str.substring(0, length);
}

fetch(weatherApiUrl)
    .then(Response => Response.json())
    .then(data => {
        console.log(data, "data");
        weathercity.innerText = data.location.name;
        weathertemp.innerText = data.current.temp_c + '°';
        weatherHumidity.innerText = 'Humidité : ' + data.current.humidity + '%';
        windSpeed.innerText = data.current.wind_kph + ' km/h';
        gust.innerText = data.current.gust_kph + ' km/h';
        felslike.innerText = data.current.feelslike_c + '°c';

        // Calcule l'écart de température et limite aux 4 premiers chiffres
        let gap = data.current.feelslike_c - data.current.temp_c;
        feelsgap.innerText = 'écart : '+ getCharacters(gap.toString(), 4) + '°c';
    });

