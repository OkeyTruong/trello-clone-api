import { HttpStatusCode } from "*/utilities/constants";
import { BoardServices } from "*/services/board.service";

const createNewBoard = async (req, res) => {
  try {
    const result = await BoardServices.createNewBoard(req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    console.log("controller", error);
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      error: error.message,
    });
  }
};

const getFullBoard = async (req, res) => {
  try {
    const result = await BoardServices.getFullBoard(req.params.id);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      error: error.message,
    });
  }
};
export const BoardControllers = { createNewBoard, getFullBoard };
