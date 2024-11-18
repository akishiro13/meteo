function updateDateTime() {
    const now = new Date();

    // format de la date
    const formattedDate = now.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // format heure
    const formattedTime = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // MAJ si heure a changer
    const dateTimeElement = document.getElementById("dateTime");
    const currentDateTime = `${formattedDate} | ${formattedTime}`
    if (dateTimeElement.innerText !== currentDateTime) {
        dateTimeElement.innerText = currentDateTime;
    }

    // appeler fonction MAJ a la prochaine animation
    requestAnimationFrame(updateDateTime);
}

// initialiser date et heure
updateDateTime();

const iconWeather = {
    "Sunny": "image/p4j.svg",
    "Rain": "image/p14j.svg",
    "Partly cloudy": "image/p12bisj.svg",
    "Clear": "image/p1j.svg"

};

const logoweather1 = document.getElementById('logoweather1');
const logoweather2 = document.getElementById('logoweather2');
const logoweather3 = document.getElementById('logoweather3');


const temperature = document.getElementById('temperature');
const maxtemp = document.getElementById('maxtemp');
const mintemp = document.getElementById('mintemp');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');


const weathertemp = document.getElementById('weather-temps');
const weatherHumidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windkph');
const weather = document.getElementById('weather')
const weather3 = document.getElementById('weather3')
const weather2 = document.getElementById('weather2')
const translatedWeather = {
    "Sunny": "Ensoleillé",
    "Rain": "Pluie",
    "Partly cloudy": "Partiellement nuageux",
    "Clear": "Dégagé"

};

function translateWeather(condition) {
    return translatedWeather[condition] || condition;
}
function logoWeather(condition) {
    return iconWeather[condition] ;
}
// -----------------------------------------------------
const weatherKey = 'c3e36d91b00b4958b7284918241211';
const weathercity = 'Marseille';
const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=Marseille&aqi=no`;


fetch(weatherApiUrl)
    .then(Response => Response.json())
    .then(data => {
        console.log(data, "data");
        weathercity.innerText = data.location.name;
        weathertemp.innerText = data.current.temp_c + ' °';
        weatherHumidity.innerText = data.current.humidity + ' %';
        windSpeed.innerText = data.current.wind_kph + ' km/h';
        const weatherCondition = data.current.condition.text;
        const translatedCondition = translateWeather(weatherCondition);
        weather.innerText = translatedCondition;
        logoweather1.src = logoWeather(weatherCondition);
        



    });


// -----------------------------------------------------
function getFormattedDate(daysOffset = 1) {//offset (0 pour aujourd'hui, 1 pour demain, etc.)
    const date = new Date();
    date.setDate(date.getDate() + daysOffset); 
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois au format 2 chiffres
    const day = String(date.getDate()).padStart(2, '0'); // Jour au format 2 chiffres
    return `${year}-${month}-${day}`; 
}

const weatherKey2 = 'c3e36d91b00b4958b7284918241211';
const weathercity2 = 'Marseille';

const weatherApiUrl2 = `http://api.weatherapi.com/v1/history.json?key=${weatherKey2}&q=${weathercity2}&dt=${getFormattedDate()}`;

fetch(weatherApiUrl2)
    .then(response => response.json())
    .then(data => {
        console.log(data, "data");
        weathercity2.innerText = data.location.name;
        weathertemp.innerText = data.forecast.forecastday[0].hour[0].temp_c + ' °';
        weatherHumidity.innerText = data.forecast.forecastday[0].hour[0].humidity + ' %';
        windSpeed.innerText = data.forecast.forecastday[0].hour[0].wind_kph + ' km/h';
        maxtemp.innerText = data.forecast.forecastday[0].day.maxtemp_c + '/';
        mintemp.innerText = data.forecast.forecastday[0].day.mintemp_c;


        const weatherCondition2 = data.forecast.forecastday[0].hour[0].condition.text;
        const translatedCondition2 = translateWeather(weatherCondition2);

        weather2.innerText = translatedCondition2;
        logoweather2.src = logoWeather(weatherCondition2);

    })
// -----------------------------------------------------
function getFormattedDate(daysOffset = 1) {//offset (0 pour aujourd'hui, 1 pour demain, etc.)
    const date = new Date();
    date.setDate(date.getDate() + daysOffset); 
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois au format 2 chiffres
    const day = String(date.getDate()).padStart(2, '0'); // Jour au format 2 chiffres
    return `${year}-${month}-${day}`;
}

const weatherKey3 = 'c3e36d91b00b4958b7284918241211';
const weathercity3 = 'Marseille';

const weatherApiUrl3 = `http://api.weatherapi.com/v1/history.json?key=${weatherKey2}&q=${weathercity2}&dt=${getFormattedDate()}`;
console.log(getFormattedDate,"qljfsh")

fetch(weatherApiUrl3)
    .then(response => response.json())
    .then(data => {
        console.log(data, "data");
        sunrise.innerText = data.forecast.forecastday[0].astro.sunrise;
        sunset.innerText = data.forecast.forecastday[0].astro.sunset;

    })


// -----------------------------------------------------
function updateDate() {
    const now = new Date();

    // Créer une nouvelle date pour demain
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1); // Ajoute un jour

    // format de la date pour demain
    const formattedDate = tomorrow.toLocaleString('fr-FR', {
        weekday: 'long',
    });


    // MAJ si heure a changer
    const dateElement = document.getElementById("date");
    const currentDate = `${formattedDate}`
    if (dateElement.innerText !== currentDate) {
        dateElement.innerText = currentDate;
    }

    // appeler fonction MAJ a la prochaine animation
    requestAnimationFrame(updateDate);
}


updateDate();
// -----------------------------------------------------
function updateDate2() {
    const now = new Date();

    // Créer une nouvelle date pour après-demain
    const afterTomorrow = new Date(now);
    afterTomorrow.setDate(now.getDate() + 2); // Ajoute deux jours

    // format de la date pour après-demain
    const formattedDate = afterTomorrow.toLocaleString('fr-FR', {
        weekday: 'long',
    });

    // MAJ si heure a changer
    const date2Element = document.getElementById("date2");
    const currentDate2 = `${formattedDate}`
    if (date2Element.innerText !== currentDate2) {
        date2Element.innerText = currentDate2;
    }

    // appeler fonction MAJ a la prochaine animation
    requestAnimationFrame(updateDate2);
}

// initialiser date et heure
updateDate2();
// -----------------------------------------------------
