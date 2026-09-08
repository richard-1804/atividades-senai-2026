import express from "express";
import cors from "cors";

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

let consultas = [
    {
        id: 1,
        paciente: "Teteuzinho",
        medico: "Jotinha Ernesto",
        especialidade: "Tricologista"
    },
    {
        id: 2,
        paciente: "Luquinha",
        medico: "Lolozinha",
        especialidade: "Psiquiátra"
    },
    {
        id: 3,
        paciente: "Danielzinho",
        medico: "Teteuzinho",
        especialidade: "Enfermeiro"
    }
];

app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso na porta: ${PORTA}\nURL: http://localhost:3000/consultas`);
});

app.get("/", (req, res) => {
    res.json({mensagem: "Sistema de Agendamento Médico Ativo"})
});

app.get("/consultas", (req, res) => {
    res.json(consultas);
});

app.get("/consultas/:id", (req, res) => {
    const idBusca = parseInt(req.params.id);

    const idEncontrado = consultas.find((c) => c.id === idBusca);

    if(!idEncontrado) {
       return res.status(404).json({erro: "Consulta não encontrada."})
    };

    res.json(idEncontrado);
});

app.post("/consultas", (req, res) => {
    const novaConsulta = req.body;

    if(consultas.length > 0) {
        novaConsulta.id = consultas[consultas.length - 1].id + 1;
    } else {
        novaConsulta.id = 1;
    };

    consultas.push(novaConsulta);

    res.status(201).json(novaConsulta);
});

app.delete("/consultas/:id", (req, res) => {
    const idBusca = parseInt(req.params.id);

    const index = consultas.findIndex((c) => c.id === idBusca);

    if (index === -1) {
        return res.status(404).json({erro: "Consulta não encontrada"});
    };

    consultas.splice(index, 1);

    res.status(200).json({mensagem: "Consulta deletada com sucesso!"});
});