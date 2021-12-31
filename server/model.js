const mongoose = require('mongoose');

const book_data_schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title of the book you want to enter is required']
    },
    author:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const Book = mongoose.model('book',book_data_schema);
module.exports = Book;
