import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';
import cors from 'cors';

const app = express();
const PORT = 3000

const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// middeware
app.use(cors(corsOptions));
app.use(express.json());


const tasksHandler = require("./api/tasks").default

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) =>{
  await tasksHandler(req, res);
});



app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
