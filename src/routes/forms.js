import { Router } from "express";
import formsController from "../controllers/formsController.js";

const router = Router();

router.get('/', formsController.show);

router.get('/:id', (req, res) => {
  return res.send(req.params.id);
});

router.post('/', formsController.saveForm);

export default router;