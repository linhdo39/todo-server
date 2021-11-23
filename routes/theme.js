var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/', async function(req, res, next) {
    return res.status(200).json([{"name":"Default", "primaryColor": "#CC5500", "secondaryColor": "#E97451"},
        {"name":"Ocean Blue", "primaryColor": "#2952a3", "secondaryColor": "#66c2ff"},
        {"name":"Lavender Purple", "primaryColor": "#967bb6", "secondaryColor": "#ffb3b3"},
        {"name":"Midnight Gray ", "primaryColor": "#36454F", "secondaryColor": "#7393B3"}]
        )
});

module.exports = router;
