import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err);
    }
}
export {connectDB}