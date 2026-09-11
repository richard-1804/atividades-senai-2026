import z from 'zod';

export const registerSchema = z.object({
    email: z.email({mensagem: "Insira um endereço de e-mail válido"}),
    password: z.string().min(6, {mensagem: "A senha deve conter no mínimo 6 caracteres."}),
    role: z.enum(["PACIENTE", "MEDICO", "ADMIN"], {erro: "o papel deve ser PACIENTE, MEDICO OU ADMIN"})
});


export const loginSchema = z.object({
    email: z.email({mensagem: "Insira um endereço de e-mail válido"}),
    password: z.string().min(6, {mensagem: "A senha deve conter no mínimo 6 caracteres."})
});