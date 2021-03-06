import sampleData from './weather-samples.json';
import makeIconComponent from './weather-icon-loader.js';

const randIndex = Math.floor(Math.random() * sampleData.samples.length);
const testQuery = sampleData.samples[randIndex];

function filterWeatherData(obj) {
  return {
    location: obj.name,
    description: obj.weather[0].description,
    currentTemp: obj.main.temp,
    feelsLike: obj.main.feels_like,
    minTemp: obj.main.temp_min,
    maxTemp: obj.main.temp_max,
    humidity: obj.main.humidity,
    wind: obj.wind.speed,
    iconId: obj.weather[0].icon,
    localTime: obj.dt - obj.timezone,
    sunrise: obj.sys.sunrise - obj.timezone,
    sunset: obj.sys.sunset - obj.timezone,
  };
}

// This will take the raw data object from the API call
function assignData() {
  const data = filterWeatherData(testQuery);

  const location = document.body.querySelector('.location');
  location.textContent = data.location;

  const description = document.body.querySelector('.weather-description');
  description.textContent = data.description;

  const humidity = document.body.querySelector('.weather-detail-humidity');
  humidity.textContent = 'humidity: ' + data.humidity + '%';

  const wind = document.body.querySelector('.weather-detail-wind');
  wind.textContent = 'wind: ' + data.wind + 'mph';

  const unitSwitch = document.body.querySelector('.temp-unit-checkbox');

  unitSwitch.checked = localStorage.getItem('unit') === 'true' ?? false;

  unitSwitch.addEventListener('change', () => {
    localStorage.setItem('unit', unitSwitch.checked);
    assignTemps(data, unitSwitch.checked);
  });

  assignTemps(data, unitSwitch.checked);

  const svgContainerGroup = document.querySelector('.svg-container-group');
  svgContainerGroup.appendChild(makeIconComponent(data.iconId));
}

function assignTemps(data, isCelsius) {
  const getTemp = (rawTemp) =>
    isCelsius
      ? Math.round(convertKelvinToCelsius(rawTemp))
      : Math.round(convertKelvinToFahrenheit(rawTemp));

  const currentTemp = document.body.querySelector('.weather-current-temp');
  currentTemp.textContent = getTemp(data.currentTemp) + '°';

  const feelsLike = document.body.querySelector('.weather-feels-like');
  feelsLike.textContent = 'feels like: ' + getTemp(data.feelsLike) + '°';

  const maxTemp = document.body.querySelector('.weather-detail-max');
  maxTemp.textContent = 'high: ' + getTemp(data.maxTemp) + '°';

  const lowTemp = document.body.querySelector('.weather-detail-min');
  lowTemp.textContent = 'low: ' + getTemp(data.minTemp) + '°';
}

// TEMPERATURE HANDLING FUNCTIONS

function convertKelvinToFahrenheit(temp) {
  return (convertKelvinToCelsius(temp) * 9) / 5 + 32;
}

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
}

export default assignData;
