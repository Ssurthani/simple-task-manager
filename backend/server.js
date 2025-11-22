import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Mongo Connected"));
app.listen(5000, ()=>console.log("Server on 5000"));
