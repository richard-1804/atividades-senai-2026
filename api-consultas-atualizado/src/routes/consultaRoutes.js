/*
Objetivo: Mapear quais URLs respondem a quais ações e aplicar o "escudo" de validação do Zod antes de chegar nos controllers.
*/

import { creatConsultaSchema, consultaIdParamSchema, } from "../schemas/consultaSchema.js";
import { listAll, getById, create } from "../controller/consultaController.js";
import express from "express";

const router = express.Router();


// =========================================================
// Mapeamento das Rotas
// =========================================================


router.get("/", listAll);

router.get(
  "/:id",
  (req, res, next) => {
    try {
      consultaIdParamSchema.parse(req.params);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ erro: "Parâmetro Inválido", detalhes: error.issues });
    }
  },
  getById,
);

router.post(
  "/",
  (req, res, next) => {
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
  },
  create,
);

export default router;