const settings = require("dotenv").config();
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/heartbeat', (req, res) => {
    res.status(200).json({success: "ok"});
})

app.get('/api/scrape', (req, res) => {
    const website = req.query.website
    console.log("incoming request", website);
    if(!website) {
        res.status(400).send("Please provide a website");
    } else {
        res.status(200).json({success: website});
    }
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})