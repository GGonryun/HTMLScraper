const settings = require("dotenv").config();
const express = require('express')
const cors = require('cors')
const scraper = require('./scraper');

const port = settings.PORT || 5000;
const STATUS = { ERROR: 400, SUCCESS: 200 };
const CONTENT_TYPE = { HEADER: 'Content-Type', PLAIN: 'text/plain' };

const app = express();

app.use(cors())

app.get('/heartbeat', (req, res) => {
    res.status(STATUS.SUCCESS).json({success: "ok"});
})

app.get('/api/scrape', async (req, res) => {
    const website = req.query.website
    if(website) {
        try {
            const result = await scraper.scrape(website);
            return res.set(CONTENT_TYPE.HEADER, CONTENT_TYPE.PLAIN).status(200).send(`${result.toString()}`);
        } catch(error) {
            return res.status(STATUS.ERROR).send(`Please provide a valid url: ${error.message}`);
        }
    }
    return res.status(STATUS.ERROR).send("Please provide a website.");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})