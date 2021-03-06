import displayData from './display-data.js';

import clearSky from '../lib/Clear-Sky.svg';

displayData();

document
  .querySelector('.svg-container-group')
  .appendChild(makeSVGComponent(clearSky));

function makeSVGComponent(svg) {
  const element = document.createElement('div');
  element.classList.add('svg-container');

  const domParser = new DOMParser();
  const svgNode = domParser
    .parseFromString(clearSky, 'image/svg+xml')
    .querySelector('svg');
  element.appendChild(svgNode);
  return element;
}
