import { Router } from "express";
import { getAll } from "../controllers/types/controller";

const router = Router();

router.get('/', getAll);

export default router;