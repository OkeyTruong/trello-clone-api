import { CardModel } from "../models/card.model";
import { ColumnModel } from "../models/column.model";

const createNewCard = async (data) => {
  try {
    const newCard = await CardModel.createNewCard(data);

    const { columnId, _id:newCardId } = newCard;
    const result = await ColumnModel.pushCardOrder(columnId,newCardId)
    return newCard;
  } catch (error) {
    throw new Error(error);
  }
};

const updatedCard = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updatedAt: Date.now(),
    };
    const result = await CardModel.updatedCard(id, updateData);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCard = async (id) => {
  try {
    const result = await CardModel.deleteCard(id);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const CardService = { createNewCard, updatedCard, deleteCard };
