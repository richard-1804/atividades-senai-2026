import 'dotenv/config';

import consultaRouter from "./src/routes/consultaRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/consultas', consultaRouter);
app.use('/auth', authRoutes);
 

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
});
