import Joi from "joi";
import { HttpStatusCode } from "*/utilities/constants";

const createNewCard = async (req, res, next) => {
  const conditions = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().required().min(3).max(30).trim(),
  });
  try {
    await conditions.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const updatedCard = async (req, res, next) => {
  const conditions = Joi.object({
    title: Joi.string().required().min(3).max(30).trim(),
  });
  try {
    await conditions.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
}
export const CardValidations = { createNewCard,updatedCard };
