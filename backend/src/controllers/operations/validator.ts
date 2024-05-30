import Joi from "joi"
import DTO from "../../models/operations/dto"

export const addOperationValidator = Joi.object<DTO>({
    accountNumber: Joi.string().min(5).required(),
    type: Joi.number().valid(1, 2, 3),
    date: Joi.date().required(),
    sum: Joi.number().max(1000000).positive().required(),
    interest: Joi.number().positive().allow(null),
    payments: Joi.number().max(360).positive().allow(null)

});

