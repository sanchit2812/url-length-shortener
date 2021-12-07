const express = require('express');
const shortid = require('shortid');
const router = express.Router();

const {urls: urlData, urls} = require("./url_data");

router.get('/', (req, res)=>{
    
    const size = Object.keys(urls).length;
    if (size > 0) {
        res.send(urls);
    } else {
        res.status(404).send("No urls present");
    }
});

router.get("/:shortUrlId", (req, res)=>{
    const shortUrlId = req.params.shortUrlId;
    if(urls[shortUrlId]){
        res.redirect(urls[shortUrlId]);
    }else{
        res.status(404).send(`This URL is not shortened by our service.`);
    }
});

router.post("/", (req, res)=>{
    const longUrl = req.body;
    const shortUrlId = shortid.generate();
    urls[shortUrlId] = longUrl.longUrl;
    res.send({shortUrl : `https://url-length-shortener.herokuapp.com/urls/${shortUrlId}`});
});

module.exports = router;
