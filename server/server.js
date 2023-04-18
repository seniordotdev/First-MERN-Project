import express  from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/mongoDB.js";
import cors from "cors";
import router from "./routes/routes.js";
dotenv.config();

connectDB();  
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
})
app.use('/',router)
