import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const usuarios = [];

export const register = async (req, res) => {
    const { email, password, role } = req.body;

    const hassPassword = await bcrypt.hash(password, 10);

    const novoUsuario = {
        id: (usuarios?.length ?? 0) + 1,
        email,
        password: hassPassword,
        role
    };

    usuarios.push(novoUsuario);

    return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const usuario = usuarios.find((u) => u.email === email);

    if (!usuario) {
        return res.status(401).json({ mensagem: "Credenciais inválidas" });
    };

    const isPasswordValid = await bcrypt.compare(password, usuario.password);

    if (!isPasswordValid) {
        return res.status(401).json({ mensagem: "Credenciais inválidas" });
    };

    const token = jwt.sign(
        { id: usuario.id, email: usuario.email, role: usuario.role }, 
        process.env.JWT_SECRET, 
        {expiresIn: '1h'});

    return res.status(200).json({ token });
};