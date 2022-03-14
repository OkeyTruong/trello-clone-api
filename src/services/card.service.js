import { CardModel } from "../models/card.model";

const createNewCard = async (data) => {
  try {
    const result = await CardModel.createNewCard(data);
    return result;
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
}
export const CardService = { createNewCard, updatedCard,deleteCard };
