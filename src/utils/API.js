export const getCurrentData = (API_KEY) => {
    return fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${API_KEY}`)
};