import displayData from './display-data.js';

// TODO: should be submitable in all the normal ways you'd expect,
// TODO: not just on submit button click...
const submitButton = document.querySelector('.search-submit');
const searchInput = document.querySelector('.search-input');
submitButton.addEventListener('click', () =>
  onWeatherSearch(searchInput.value)
);
// when submit button is hit on search
async function onWeatherSearch(searchValue) {
  // if the search content isn't empty & isn't too long,
  if (searchValue.length < 3 || searchValue.length > 63) {
    console.warn('Invalid search');
    return;
  }

  // TODO: RENDER 'LOADING' DISPLAY

  const response = await fetch(getQueryUrl(searchValue));
  const data = await response.json();

  console.log(data);
  displayData(data);
}

function getQueryUrl(searchValue) {
  const urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const k = '&appid=bbf3f04cb5a7134662f048d9b93457cf';
  const cat = urlBase + searchValue + k;
  return cat;
}

displayData();
