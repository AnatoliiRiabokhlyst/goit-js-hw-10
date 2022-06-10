// ---------------------IMPORTS---------------------
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
import { addMarkupOfList, addMarkupOfCountryCard } from '../index.js';
import getRefsObject from './refs.js';

const refs = getRefsObject();
// --------------------FUNCTIONS--------------------
function getDataFromInput(ev) {
  refs.countryCard.innerHTML = '';
  refs.countryList.innerHTML = '';
  const value = ev.target.value.trim();

  if (!value) {
    return;
  }

  fetchCountries(value).then(onSuccessInput).catch(onErrorInput);
}

function onSuccessInput(responseData) {
  isSpecificInput(responseData);
}

function onErrorInput(data) {
  Notiflix.Notify.failure(data.message);
}

function isSpecificInput(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (2 <= data.length && data.length <= 10) {
    return addMarkupOfList(data);
  } else if ((data.length = 1)) {
    return addMarkupOfCountryCard(data);
  }
}
export { getDataFromInput };