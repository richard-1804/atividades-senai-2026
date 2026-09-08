import express from "express";
import cors from "cors";

const app = express();
const PORTA = 3333;

app.use(cors());
app.use(express.json());

let eventos = [
    {
        id: 1,
        titulo: "Drones: FPV or DJI ?",
        palestrante: "Daniel Richard",
        vagas: 500
    },
    {
        id: 2,
        titulo: "Ford X Ferrari",
        palestrante: "Luca Mendes",
        vagas: 300
    },
    {
        id: 3,
        titulo: "Aviação Comercial X Particular",
        palestrante: "João Pedro Fagundes",
        vagas: 100
    }
];

app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso na porta: ${PORTA}\nURL: http://localhost:3333/eventos`);
});

app.get("/", (req, res) => {
    res.json({mensagem: "Sistema de Gestão de Eventos Ativo"})
});

app.get("/eventos", (req, res) => {
    res.json(eventos);
});

app.get("/eventos/:id", (req, res) => {
    const idBusca = parseInt(req.params.id);

    const idEncontrado = eventos.find((e) => e.id === idBusca);

    if(!idEncontrado) {
       return res.status(404).json({erro: "Evento não encontrado."})
    };

    res.json(idEncontrado);
});

app.post("/eventos", (req, res) => {
    const novoEvento = req.body;

    if(eventos.length > 0) {
        novoEvento.id = eventos[eventos.length - 1].id + 1;
    } else {
        novoEvento.id = 1;
    };

    eventos.push(novoEvento);

    res.status(201).json(novoEvento);
});

app.delete("/eventos/:id", (req, res) => {
    const idBusca = parseInt(req.params.id);

    const index = eventos.findIndex((e) => e.id === idBusca);

    if (index === -1) {
        return res.status(404).json({erro: "Evento não encontrado"});
    };

    eventos.splice(index, 1);

    res.status(200).json({mensagem: "Produto deletado com sucesso!"});
});