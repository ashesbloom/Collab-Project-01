const express = require('express');
const router = express.Router(); 

const {
    GetHomepage,
} = require('../controller/staticControl');

router.get('/',GetHomepage);

module.exports = router;