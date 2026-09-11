import express from "express";
const router = express.Router();

import { register, login } from "../controller/authController.js";
import { registerSchema, loginSchema } from '../schemas/authSchema.js';


const validateRegister = (req, res, next) => {
    try {
      registerSchema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({ erro: error.issues });
    }
};

const validateLogin = (req, res, next) => {
    try {
      loginSchema.parse(req.body);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ erro: error.issues});
    };
};


router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;