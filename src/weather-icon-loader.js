import clearSky from '../lib/weather-icons/Clear-Sky.inline.svg'; // 01
import fewClouds from '../lib/weather-icons/Few-Clouds.inline.svg'; // 02
import scatteredClouds from '../lib/weather-icons/Scattered-Clouds.inline.svg'; // 03
import brokenClouds from '../lib/weather-icons/Broken-Clouds.inline.svg'; // 03
import showerRain from '../lib/weather-icons/Shower-Rain.inline.svg'; // 09
import rain from '../lib/weather-icons/Rain.inline.svg'; // 10
import thunderstorm from '../lib/weather-icons/Thunderstorm.inline.svg'; // 11
import snowflake from '../lib/weather-icons/Few-Clouds.inline.svg'; // 13
import mist from '../lib/weather-icons/Mist.inline.svg'; // 50

const icons = {
  n01: clearSky,
  n02: fewClouds,
  n03: scatteredClouds,
  n04: brokenClouds,
  n09: showerRain,
  n10: rain,
  n11: thunderstorm,
  n13: snowflake,
  n50: mist,
};

// Takes the icon ID from the OWM API (eg, '10d')
// Returns svg from the equivalent property of icons object
function getSvg(iconId) {
  const svgId = `n${iconId.slice(0, 2)}`;
  const svg = icons[svgId];

  if (!svg) {
    console.error('Could not get icon for Icon ID ' + svgId);
    return null;
  }

  return svg;
}

export default function makeSVGComponent(svgIDRaw) {
  // Get SVG & Validate
  const svg = getSvg(svgIDRaw);
  const element = document.createElement('div');
  element.classList.add('svg-container');

  const domParser = new DOMParser();
  const svgNode = domParser
    .parseFromString(svg, 'image/svg+xml')
    .querySelector('svg');
  element.appendChild(svgNode);
  return element;
}
