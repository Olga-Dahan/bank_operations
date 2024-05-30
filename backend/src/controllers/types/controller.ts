import { NextFunction, Request, Response } from "express";
import getModel from "../../models/types/factory";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typeOperation = await getModel().getAll();
        res.json(typeOperation);
    } catch (err) {
        next(err)
    }
}