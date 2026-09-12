/*
Objetivo: Mapear quais URLs respondem a quais ações e aplicar o "escudo" de validação do Zod antes de chegar nos controllers.
*/

import { creatConsultaSchema, consultaIdParamSchema, } from "../schemas/consultaSchema.js";
import { listAll, getById, create } from "../controller/consultaController.js";

import { authMiddleware } from '../middleware/authMiddleware.js';
import { autorizarCargos } from '../middleware/roleMiddleware.js';

import express from "express";

const router = express.Router();



const validateId = (req, res, next) => {
    try {
      consultaIdParamSchema.parse(req.params);
      next();
    } catch (error) {
      return res.status(400).json({ erro: "Parâmetro Inválido", detalhes: error.issues });
    }
};

const validateCrate = (req, res, next) => {
    try {
      creatConsultaSchema.parse(req.body);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({
          mensagem: "Erro! Dados inválidos ou incompletos",
          erro: error.issues,
        });
    }
};


// =========================================================
// Mapeamento das Rotas
// =========================================================


router.get("/", authMiddleware, listAll);

router.get("/:id", authMiddleware, validateId, getById);

router.post("/", authMiddleware, autorizarCargos('ADMIN', 'MEDICO'), validateCrate, create);

export default router;