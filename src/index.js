import debounce from 'lodash.debounce';
import './css/styles.css';
import getRefs from './services/refs';
import { getDataFromInput } from './services/service';
import {
  renderList,
  renderCard,
} from './services/markup';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener(
  'input',
  debounce(getDataFromInput, DEBOUNCE_DELAY)
);

function addMarkupOfList(data) {
  const markup = renderList(data);
  refs.countryCard.innerHTML = '';
  refs.countryList.innerHTML = '';
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function addMarkupOfCountryCard(data) {
  const markup = renderCard(data);
  refs.countryList.innerHTML = '';
  refs.countryCard.innerHTML = '';
  refs.countryCard.insertAdjacentHTML('beforeend', markup);
}

export { addMarkupOfList, addMarkupOfCountryCard };