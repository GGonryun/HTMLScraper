const fetch = require('node-fetch');
const websites = ["https://turkish123.com/", "https://luna0cosmetics.myshopify.com/", "http://all-guitar-chords.com/"];

websites.forEach(
    website => fetch(website)
        .then(response => response.text())
        .then(html => console.log(html))
        .catch(err => console.log('Failed to fetch page: ', err))
);
    
