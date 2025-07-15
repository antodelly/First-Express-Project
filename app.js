import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json);
app.listen(process.env.PORT, () => console.log(`SERVER STARTED ON htp://localhost:${PORT}`))

