/*
Objetivo: Guardar os dados e manipular o que acontece ao buscar ou criar uma consulta.
*/  

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

export const listAll = (req, res) => {
    try {
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar as consultas" });
    };
};

export const getById = (req, res) => {
    try {
        const idBusca = Number(req.params.id);
        const idEncontrado = consultas.find((c) => c.id === idBusca);

        if(!idEncontrado) {
            return res.status(404).json({ error: "Consulta não encontrada" });
        };

        res.json(idEncontrado);

    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar consulta por id" });
    };
};

export const create = (req, res) => {
    try {
        const novaConsulta = req.body;

        consultas.push(novaConsulta);

        res.status(201).json(novaConsulta);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar a consulta" });
    };
};