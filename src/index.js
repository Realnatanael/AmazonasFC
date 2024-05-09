import cors from 'cors';
import express from 'express';
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
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token, X-Api-Version, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
