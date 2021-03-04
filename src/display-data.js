const testQuery = {
  coord: { lon: -112.074, lat: 33.4484 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
  main: {
    temp: 289.57,
    feels_like: 284.75,
    temp_min: 287.59,
    temp_max: 291.15,
    pressure: 1012,
    humidity: 16,
  },
  visibility: 10000,
  wind: { speed: 2.57, deg: 70 },
  clouds: { all: 1 },
  dt: 1614748884,
  sys: {
    type: 1,
    id: 5347,
    country: 'US',
    sunrise: 1614693308,
    sunset: 1614734755,
  },
  timezone: -25200,
  id: 5308655,
  name: 'Phoenix',
  cod: 200,
};

function filterWeatherData(obj) {
  return {
    description: obj.weather[0].description,
    currentTemp: obj.main.temp,
    feelsLike: obj.main.feels_like,
    minTemp: obj.main.temp_min,
    maxTemp: obj.main.temp_max,
    humidity: obj.main.humidity,
    wind: obj.wind.speed,
    localTime: obj.dt - obj.timezone,
    sunrise: obj.sys.sunrise - obj.timezone,
    sunset: obj.sys.sunset - obj.timezone,
  };
}

// This will take the raw data object from the API call
function assignData() {
  const data = filterWeatherData(testQuery);

  // TODO: check if mode is set to F or C
  const getTemp = (rawTemp) => Math.round(convertKelvinToFahrenheit(rawTemp));

  const description = document.body.querySelector('.weather-description');
  description.textContent = data.description;

  const currentTemp = document.body.querySelector('.weather-current-temp');
  currentTemp.textContent = getTemp(data.currentTemp) + '°';

  const feelsLike = document.body.querySelector('.weather-feels-like');
  feelsLike.textContent = 'feels like: ' + getTemp(data.feelsLike) + '°';

  const maxTemp = document.body.querySelector('.weather-detail-max');
  maxTemp.textContent = 'high: ' + getTemp(data.maxTemp) + '°';

  const lowTemp = document.body.querySelector('.weather-detail-min');
  lowTemp.textContent = 'low: ' + getTemp(data.minTemp) + '°';

  const humidity = document.body.querySelector('.weather-detail-humidity');
  humidity.textContent = 'humidity: ' + data.humidity + '%';

  const wind = document.body.querySelector('.weather-detail-wind');
  wind.textContent = 'wind: ' + data.wind + 'mph';
}

// TEMPERATURE HANDLING FUNCTIONS

function convertKelvinToFahrenheit(temp) {
  return (convertKelvinToCelsius(temp) * 9) / 5 + 32;
}

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
}

export default assignData;
