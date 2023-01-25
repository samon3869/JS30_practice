// 1. fetch the city data
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
    .then(response => response.json())
    // .then(response => response.text())
    // .then(result => JSON.parse(result))
    .then(data => cities.push(...data));

// 2. make list of matched cities
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex)
    });
}

// 3. make html text code from the 'matched cities' list
function displayMatches(wordToMatch) {
    const matchArray = findMatches(wordToMatch, cities);
    const textCode = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.city}, ${place.state}</span>
            <span class="population">${place.population}</span>
        </li>
        `
    }).join('');
    // 4. input the html text code
    suggestions.innerHTML = textCode;
}

const suggestions = document.querySelector('.suggestions');
// 5. make all these process to one fucntion