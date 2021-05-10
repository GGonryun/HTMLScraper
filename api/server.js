const fetch = require('node-fetch');
const fs = require('fs');

const FILE_ENCODING = "utf8";
const DATA_FOLDER = "data";
const OUTPUT_FILE_EXTENSION = "html";
const WEBSITES = ["https://turkish123.com/", "https://luna0cosmetics.myshopify.com/", "http://all-guitar-chords.com/"];

function cleanUrl(url) {
    return url.replace(/(https|http)|[/\\?%*:|"<>]/g, '');
}

function generateFileName(website) {
    return `./${DATA_FOLDER}/${cleanUrl(website)}.${OUTPUT_FILE_EXTENSION}`;
}

function generateFile(website, html) {
    const file = generateFileName(website);
    fs.writeFile(file, html, FILE_ENCODING, (err) => {
        if(err) throw err;
        console.log(`Created File => ${file}`);
    })
}

WEBSITES.forEach(
    website => fetch(website)
        .then(response => response.text())
        .then(html => generateFile(website, html))
        .catch(err => console.log('Failed to fetch page: ', err))
);