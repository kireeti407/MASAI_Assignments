const express=require(express)

const Memberrouter=express.router()

Memberrouter.post('/add-member',addmember)

Memberrouter.get('/member-borrowed-books/:memberId',getmemberb)

Memberrouter.post('/borrow-book',borrowbook)

Memberrouter.post('/return-book',returnbook)