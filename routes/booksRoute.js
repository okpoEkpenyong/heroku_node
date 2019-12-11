const express = require('express');
const router = express.Router();
const db = require('../controllers/booksController');


router.get('/', (req, res) => {
   res.redirect(301, 'https://documenter.getpostman.com/view/9382723/SWE84wuB');
});

router.get('/api/v1/books', db.getAllBooks);
   
   module.exports = router;