import { Router } from "express"; 
import {createBook, getAllBooks, getBookById, updateBook, deleteBook} from "../controllers/books.js";
const router = Router(); 



router.get('/api/books',getAllBooks)
router.post('/api/books',createBook)
router.put('/api/books/:id',updateBook)
router.delete('/api/books/:id',deleteBook)
router.get('/api/books/:id',getBookById)



export  default router;