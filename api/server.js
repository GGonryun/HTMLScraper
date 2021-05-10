const fetch = require('node-fetch');
const fs = require('fs');
const FILE_ENCODING = "utf8";
const DATA_FOLDER = "data";
const websites = ["https://turkish123.com/", "https://luna0cosmetics.myshopify.com/", "http://all-guitar-chords.com/"];

function cleanUrl(url) {
    return url.replace(/(https|http)|[/\\?%*:|"<>]/g, '');
}

websites.forEach(
    website => fetch(website)
        .then(response => response.text())
        .then(html => {
            const file = `./${DATA_FOLDER}/${cleanUrl(website)}.txt`;
            fs.writeFile(file, html, FILE_ENCODING, (err) => {
                if(err) throw err;
                return `Created File => ${file}`;
            })
        })
        .catch(err => console.log('Failed to fetch page: ', err))
);
    
// fs.writeFile(filename, data, [encoding], [callback])

