const express = require('express');
const router = express.Router();

const {home,about} = require('../controllers/mainControllers');

/* GET HOME Page */
router
    .get('/', home)
    .get('/about',about)

module.exports=router;