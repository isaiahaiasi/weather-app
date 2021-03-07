import sampleData from './weather-samples.json';
import makeIconComponent from './weather-icon-loader.js';
import { elm } from './domUtils.js';

const randIndex = Math.floor(Math.random() * sampleData.samples.length);
const testQuery = sampleData.samples[randIndex];

function filterWeatherData(obj) {
  if (obj.cod !== 200) {
    return { code: obj.cod };
  }
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
    code: obj.cod,
  };
}

const container = document.querySelector('.main-content');
let content = elm('div', 'weather-content');

// This will take the raw data object from the API call
function renderData(dataObj) {
  // TODO: data should be passed to this function pre-filtered
  const data = filterWeatherData(dataObj ?? testQuery);

  // Clear containers
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (data.code !== 200) {
    const errorElm = document.createElement('div');
    errorElm.textContent = 'Sorry, where is that?';
    container.appendChild(errorElm);
    return;
  }
  content = elm('div', 'weather-content');

  const infoContainer = elm('div', 'info-container', 'weather-card');
  infoContainer.appendChild(renderWeatherInfo(data));

  const iconContainer = elm('div', 'icon-container', 'weather-card');
  const svgContainerGroup = elm('div', '.svg-container-group');
  svgContainerGroup.appendChild(makeIconComponent(data.iconId));
  iconContainer.appendChild(svgContainerGroup);

  const location = elm('div', 'location');
  location.textContent = data.location;

  const unitSwitch = document.body.querySelector('.temp-unit-checkbox');

  unitSwitch.addEventListener('change', () => {
    localStorage.setItem('unit', unitSwitch.checked);
    renderTemps(data, unitSwitch.checked);
  });

  // TODO: Move to a separate component
  unitSwitch.checked = localStorage.getItem('unit') === 'true' ?? false;

  content.append(infoContainer, iconContainer, location);

  renderTemps(data, unitSwitch.checked);

  container.appendChild(content);
}

function renderWeatherInfo(data) {
  // Generate containers
  const description = elm('div', 'weather-description');

  const weatherInfoContainer = elm('div', 'weather-info-container');

  const weatherTempGroup = elm('div', 'weather-temp-group');
  weatherTempGroup.append(
    elm('div', 'weather-current-temp'),
    elm('div', 'weather-feels-like')
  );

  const weatherDetails = elm('div', 'weather-details');
  weatherDetails.append(
    elm('div', 'weather-detail-max'),
    elm('div', 'weather-detail-min'),
    elm('div', 'weather-detail-humidity'),
    elm('div', 'weather-detail-wind')
  );

  // Apply data (excluding temp, handled elsewhere)
  description.textContent = data.description;

  const humidity = weatherDetails.querySelector('.weather-detail-humidity');
  humidity.textContent = 'humidity: ' + data.humidity + '%';

  const wind = weatherDetails.querySelector('.weather-detail-wind');
  wind.textContent = 'wind: ' + data.wind + 'mph';

  // Tie everything together
  weatherInfoContainer.append(weatherTempGroup, weatherDetails);

  // Append toplevel nodes to fragment & return
  const frag = new DocumentFragment();
  frag.append(description, weatherInfoContainer);
  return frag;
}

function renderTemps(data, isCelsius) {
  const getTemp = (rawTemp) =>
    isCelsius
      ? Math.round(convertKelvinToCelsius(rawTemp))
      : Math.round(convertKelvinToFahrenheit(rawTemp));

  const currentTemp = content.querySelector('.weather-current-temp');
  currentTemp.textContent = getTemp(data.currentTemp) + '°';

  const feelsLike = content.querySelector('.weather-feels-like');
  feelsLike.textContent = 'feels like: ' + getTemp(data.feelsLike) + '°';

  const maxTemp = content.querySelector('.weather-detail-max');
  maxTemp.textContent = 'high: ' + getTemp(data.maxTemp) + '°';

  const lowTemp = content.querySelector('.weather-detail-min');
  lowTemp.textContent = 'low: ' + getTemp(data.minTemp) + '°';
}

// TEMPERATURE HANDLING FUNCTIONS

function convertKelvinToFahrenheit(temp) {
  return (convertKelvinToCelsius(temp) * 9) / 5 + 32;
}

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
}

export default renderData;
