import mongoose from 'mongoose';
const books = new mongoose.Schema({
    image:{
        type: 'string',
        required: true
    },
    name:{
        type: 'string',
        required: true
    },
    author:{
        type: 'string',
        required: true
    },
    year:{
        type: 'number',
        required: true
    }
})
const Book = mongoose.model('Books', books);
export {Book};