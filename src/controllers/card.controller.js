import { CardService } from "../services/card.service";
import { HttpStatusCode } from "*/utilities/constants";

const createNewCard = async (req, res) => {
  try {
    const result = await CardService.createNewCard(req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const updatedCard = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CardService.updatedCard(id, req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CardService.deleteCard(id);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
}
export const CardControllers = { createNewCard, updatedCard, deleteCard };
