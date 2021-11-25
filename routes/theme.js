var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/', async function(req, res, next) {
    return res.status(200).json([
        {"name":"Default", "primaryColor": "#000000", "secondaryColor": "#FFFFFF"},
        {"name":"Theme 1", "primaryColor": "#13258f", "secondaryColor": "#abf1ff"},
        {"name":"Theme 2", "primaryColor": "#4d1549", "secondaryColor": "#fce1fb"},
        {"name":"Theme 3 ", "primaryColor": "#36454F", "secondaryColor": "#c9c9c9"},
        {"name":"Theme 4", "primaryColor": "#294c91", "secondaryColor": "#e0ffe8"}]
        )
});

module.exports = router;
