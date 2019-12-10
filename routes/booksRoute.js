const express = require('express');
const router = express.Router();
const db = require('../controllers/booksController');


router.get('/', (req, res) => {

   res.send(JSON.stringify({Hello: 'My Books World!'}))
});

router.get('/api/v1/books', db.getAllBooks);
   
   module.exports = router;