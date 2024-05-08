import express from 'express';
import cors from 'cors';
import connectDatabase from './src/database/db.js';
import dotenv from "dotenv";

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';
dotenv.config(); 

const port = process.env.PORT || 3000; 
const app = express();

connectDatabase();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));