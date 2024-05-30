import { Router } from "express";
import { add, getOperations, remove } from "../controllers/operations/controller";
import validate from "../middlewares/input-validation";
import { addOperationValidator } from '../controllers/operations/validator';

const router = Router();

router.get('/:account_number', getOperations);
router.post('/add', validate(addOperationValidator) , add);
router.delete('/delete/:id', remove);


export default router;