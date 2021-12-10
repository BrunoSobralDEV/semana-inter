import { Router } from "express";
import { UserController } from '../resources/user/user.controllers';

const userRouter = Router()
const userController = new UserController();

// API-REST
// GET    - busca e retornar algum dado
// POST   - Inserir/Criar informação no servidor (parâmetros via body/header..)
// PUT    - Atualizar o banco (todos os dados)
// PATCH  - Atualizar o banco (um dado específico)
// DELETE - Excluir

//'path/url', 'função'
userRouter.post('/signin', userController.signin)

userRouter.post('/signup', userController.signup)

export  default userRouter;