const options = `?fields=name,capital,population,flags,languages`;
const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}${options}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  });
}

export { fetchCountries };