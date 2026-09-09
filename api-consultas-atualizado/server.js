import consultaRouter from "./src/routes/consultaRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

app.use('/consultas', consultaRouter);


app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso na porta: ${PORTA}\nURL: http://localhost:3000/consultas`);
});
