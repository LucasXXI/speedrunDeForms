import { Router } from "express";
import routesForms from './forms.js'
 
const routes = Router();

routes.use('/form', routesForms)

export default routes;