import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './utils/db.js';
import aiRoutes from './Routes/spenditbotRoutes.js';
import entryRoutes from './Routes/entryRoutes.js';
import authRoutes from './Routes/authRoutes.js';

dotenv.config("./");
const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}));  
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/spenditbot", aiRoutes);
app.use("/api/entry", entryRoutes)

connectDB().then(()=>{
app.listen(5001, () => {
    console.log("Server is running on port: ", 5001);
});
});