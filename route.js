const router = require('express').Router()
const Book = require('./model/book')

router.get('/data',async (req,res)=>{

    const data = await Book.find()
     res.send(data)

})

module.exports = router;