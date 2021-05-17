import { Router } from 'express';
import classeRouter from './classe.routes';

const routes = Router();

routes.use('/classe', classeRouter);

export default routes;
