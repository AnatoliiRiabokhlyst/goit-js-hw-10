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

function addEmptyList(arr, markup) {
  refs.countryList.innerHTML = '';
  refs.countryCard.innerHTML = '';
  arr.insertAdjacentHTML('beforeend', markup);
}
function addMarkupOfList(data) {
  addEmptyList(refs.countryList, renderList(data));
}

function addMarkupOfCountryCard(data) {
  addEmptyList(refs.countryCard, renderCard(data));
}

export { addMarkupOfList, addMarkupOfCountryCard };