import Database from './config/Database.js';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

// connect to mongodb database
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors());
// app.use('/api/user', routes);

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
