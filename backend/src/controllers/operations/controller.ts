import { NextFunction, Request, Response } from "express";
import getModel from "../../models/operations/factory";
import { StatusCodes } from 'http-status-codes';

export const getOperations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const operations = await getModel().getOperations(req.params.account_number);
        res.json(operations);
    } catch (err) {
        next(err)
    }
}


export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const newOperation = await getModel().add(req.body);
        res.status(StatusCodes.CREATED).json(newOperation);
    } catch (err) {
        next(err)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isDeleted = await getModel().delete(+req.params.id);
        if (isDeleted) return res.sendStatus(StatusCodes.NO_CONTENT);
        res.status(StatusCodes.NOT_FOUND).json({success: false})
    } catch (err) {
        next(err)
    }
}