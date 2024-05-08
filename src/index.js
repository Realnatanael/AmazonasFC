import express from 'express';
import cors from 'cors';
import connectDatabase from './database/db.js';
import dotenv from "dotenv";

import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import newsRoute from './routes/news.route.js';
dotenv.config(); 

const port = process.env.PORT || 3000; 
const app = express();

connectDatabase();
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
