const express = require('express');
const router = express.Router();
const db = require('../controllers/booksController');


router.get('/', (req, res) => {

   res.send(JSON.stringify({Hello: 'Book People!'+ '...append /api/v1/books to this uri to see current books. Enjoy!'}))
});

router.get('/api/v1/books', db.getAllBooks);
   
   module.exports = router;