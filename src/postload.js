import searchComponent from './search-component.js';

//* initialize temperature switch
// TODO: Move to a separate component
// (the only problem currently is it will animate on load if not set to default)
const unitSwitch = document.body.querySelector('.temp-unit-checkbox');

unitSwitch.addEventListener('change', () => {
  localStorage.setItem('unit', unitSwitch.checked);
});

unitSwitch.checked = localStorage.getItem('unit') === 'true' ?? false;

//* initialize search component
document.querySelector('.search-container').prepend(searchComponent());
