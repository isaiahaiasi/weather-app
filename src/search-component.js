import displayData from './display-data.js';
import { elm } from './domUtils.js';

export default function searchComponent() {
  const searchContainer = elm('form', 'search-bar');

  const leftIcon = elm('div', 'search-icon-placeholder', 'left');
  const searchBtn = elm('input', 'search-button', 'search-icon-placeholder');
  searchBtn.type = 'submit';
  const searchInput = elm('input', 'search-input');
  searchInput.placeholder = 'Find your city...';

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    onWeatherSearch(searchInput.value);
    searchInput.value = '';
  });

  searchContainer.append(leftIcon, searchInput, searchBtn);

  return searchContainer;
}

// when submit button is hit on search
async function onWeatherSearch(searchValue) {
  // if the search content isn't empty & isn't too long,
  if (searchValue.length < 3 || searchValue.length > 63) {
    console.warn('Invalid search');
    return;
  }

  // TODO:? RENDER 'LOADING' DISPLAY

  const response = await fetch(getQueryUrl(searchValue));
  const data = await response.json();

  console.log(data);
  displayData(data);
}

function getQueryUrl(searchValue) {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const k = '&appid=bbf3f04cb5a7134662f048d9b93457cf';
  const cat = urlBase + searchValue + k;
  return cat;
}
