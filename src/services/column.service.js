import { ColumnModel } from "*/models/column.model";

const createNewColumn = async (data) => {
  try {
    const result = await ColumnModel.createNewColumn(data);
    return result;
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
