import { Router } from 'express';
import PixController from '../resources/pix/pix.controllers';
import userAuthenticated from '../middlewares/userAuthenticated';

const pixRouter = Router();
const pixController = new PixController();

pixRouter.use(userAuthenticated);


// API-REST
// GET    - busca e retornar algum dado
// POST   - Inserir/Criar informação no servidor (parâmetros via body/header..)
// PUT    - Atualizar o banco (todos os dados)
// PATCH  - Atualizar o banco (um dado específico)


pixRouter.post('/request', pixController.request);
pixRouter.post('/pay/:key', pixController.pay);
pixRouter.get('/transactions', pixController.transactions);

export default pixRouter;

