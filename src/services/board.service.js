import { BoardModel } from "*/models/board.model";

const createNewBoard = async (data) => {
  try {
    const result= await BoardModel.createNewBoard(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getFullBoard = async (boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId);
    // Add card to each column
    // board.columnsArray.forEach(
    //     (column) =>
    //       (column.cardsArray = board.cardsArray.filter(
    //         (card) => card.columnId.toString() === column._id.toString()
    //       ))
    //   );
    // delete board.cardsArray;
    return board;
  } catch (error) {
    throw new Error(error);
  }
};
export const BoardServices = { createNewBoard, getFullBoard };
