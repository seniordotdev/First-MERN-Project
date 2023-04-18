import { Book } from "../models/books.js";

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        res.status(200).json({
            status: "success",
            message : "Books fetched successfully",
            allBooks,
        });
    } catch (error) {
        res.status(404).send(error);
    }
}

const createBook =  async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(200).json({
            status: "success",
            message : "Book created successfully",
            newBook,
        });
    } catch (error) {
        res.status(404).send(error);
    }
}
const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message : "Book deleted successfully",
            deleteBook
        })
    } catch (error) {
        res.status(404).send(error);
    }
}
const getBookById = async (req, res) => {
    try {
        const getBook = await Book.findById(req.params.id);
        res.status(200).json({
            status: "success",
            message : "Book  found successfully",
            getBook
        })
    } catch (error) {
        res.status(404).send(error);
    }
}
const updateBook =  async (req, res) => {
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: "success",
            message : "Book updated successfully",
            updateBook
        })
    } catch (error) {
        res.status(404).send(error);
    }
}

export  {getAllBooks, createBook, deleteBook, getBookById, updateBook};