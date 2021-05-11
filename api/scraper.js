const fetch = require('node-fetch');

function trimToHomepage(url) {
    // if a website has a homepage it'll have at least 2 slashes which will create 3 components:
    // example 1: https://google.com => [ 'https:', '', 'www.google.com' ]
    // example 2: https://google.com/ => [ 'https:', '', 'www.google.com', '' ]
    // example 3: https://google.com/search?q=test => [ 'https:', '', 'www.google.com', 'search?q=test' ]
    const URL_COMPONENTS = 3; 
    return url.split('/').slice(0, URL_COMPONENTS).join('/');
}

function scrape(url) {
    return new Promise((resolve, reject) => {
        fetch(trimToHomepage(url))
            .then(response => response.text())
            .then(html => resolve(html))
            .catch(error => reject(error))
    })
}

module.exports = { scrape }