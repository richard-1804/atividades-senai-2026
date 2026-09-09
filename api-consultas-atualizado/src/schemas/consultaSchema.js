/*
Objetivo: Definir as regras de contrato de dados (o formato esperado no envio de informações).
Importação do zod.
*/

import z from "zod";


// =========================================================
// Validação e Segurança com o Schema
// =========================================================


export const creatConsultaSchema = z.object({

  paciente: z
    .string()
    .min(3, { mensagem: "O texto deve conter 3 (três) caracteres ou mais!" }),

  medico: z
    .string()
    .min(3, { mensagem: "O texto deve conter 3 (três) caracteres ou mais!" }),

  especialidade: z
    .string()
    .min(3, { mensagem: "O texto deve conter 3 (três) caracteres ou mais!" }),
});

export const consultaIdParamSchema = z.object({
  id: z
    .coerce 
    .number()
    .positive()
    .transform((val) => Number(val)) // Tenta transformar em número
    .refine(
      (val) => !isNaN(val), // Garante que a transformação gerou um número válido
      { mensagem: "O ID precisa ser um número válido" },
    ),
});
