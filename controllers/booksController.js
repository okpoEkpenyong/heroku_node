const {pool} = require('../config');



const getAllBooks = async (request, response) => {
    try {
     const client = await pool.connect()
     const result = await client.query({
       text: 'SELECT * FROM books ', 
     })
     await client.end()
     response.status(200).send({status: 'success',message: 'All Books info successfully retrieved!',data: result.rows,
     });
    } 
    catch (error) {response.status(400).json({ error: error})
    }
    
   }

   module.exports ={getAllBooks};