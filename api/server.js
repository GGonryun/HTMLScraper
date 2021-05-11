const settings = require("dotenv").config();
const express = require('express')
const cors = require('cors')
const scraper = require('./scraper');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/heartbeat', (req, res) => {
    res.status(200).json({success: "ok"});
})

app.get('/api/scrape', async (req, res) => {
    const website = req.query.website
    if(website) {
        try {
            const result = await scraper.scrape(website);
            return res.set('Content-Type', 'text/plain').status(200).send(`${result.toString()}`);
        } catch(error) {
            return res.status(400).send("Please provide a valid url.", error);
        }
    }
    return res.status(400).send("Please provide a website.");
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})