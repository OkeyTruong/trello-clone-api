import { HttpStatusCode } from "*/utilities/constants";
import { ColumnService } from "../services/column.service";

const createNewColumn = async (req, res) => {
  try {
    const result = await ColumnService.createNewColumn(req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    console.log("controller", error);
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const updateColumn = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ColumnService.updateColumn(id, req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    console.log("controller", error);
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const deleteColumn = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await ColumnService.deleteColumn(id);
        res.status(HttpStatusCode.OK).json(result);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message,
        });
    }
};
export const ColumnControllers = {
  createNewColumn,
  updateColumn,
  deleteColumn,
};
