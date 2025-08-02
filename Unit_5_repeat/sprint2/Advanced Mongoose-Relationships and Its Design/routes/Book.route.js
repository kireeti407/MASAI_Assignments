const express=require("express")

const Bookrouter=express.Router()

Bookrouter.post('/add-book',addbook)

Bookrouter.get('/book-borrowers/:bookId',bookborrowers)

Bookrouter.put('/update-book/:bookId',updatebook)

Bookrouter.delete('/delete-book/:bookId',deletebook)


