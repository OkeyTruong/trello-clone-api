import { ColumnModel } from "*/models/column.model";
import { BoardModel } from "../models/board.model";

const createNewColumn = async (data) => {
  try {
    const newColumn = await ColumnModel.createNewColumn(data);

    const boardId = newColumn.boardId;
    const newColumnId = newColumn._id;

    await BoardModel.pushColumnOrder(boardId, newColumnId);

    return newColumn;
  } catch (error) {
    throw new Error(error);
  }
};

const updateColumn = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updatedAt: Date.now(),
    };

    const result = await ColumnModel.updateColumn(id, updateData);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteColumn = async (id) => {
  try {
    const result = await ColumnModel.deleteColumn(id);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const ColumnService = {
  createNewColumn,
  updateColumn,
  deleteColumn,
};
