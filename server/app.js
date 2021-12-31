const express = require('express');
const mongoose = require('mongoose');
const DUMMY_DATA = require('./dummy');

const app = express();

app.use(express.json());

const DB="mongodb+srv://cse18107:cse18107@cluster0.7byir.mongodb.net/books_application?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(con=>{
    console.log('DB connection is successful!');
}).catch((error)=>{
   console.log(error);
});

app.get('/GET/books',(req,res)=>{
    res.status(200).json({
        'message':"getting all books",
        'data':{
            DUMMY_DATA
        }
    })
})

app.post('/PUT/book',(req,res)=>{
    const book = req.body;
    res.status(200).json({
        'message':"Sending the data of a book",
        'data':{
            book
        }
    })
});



app.patch('/PATCH/book/:id',(req,res)=>{

    res.status(200).json({
        "message":'books',
        'data':{
            book
        }
    })
});

app.delete('/DELETE/book/:id',(req,res)=>{

})


app.listen(4000,()=>{
    console.log('Listening from port 4000');
})