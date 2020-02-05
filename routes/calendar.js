const express = require('express');
const router = express.Router();
const data = require('./data');


/* GET calendar listing. */
router.get('/', function(req, res, next) {
    res.send(data);
});

module.exports = router;
