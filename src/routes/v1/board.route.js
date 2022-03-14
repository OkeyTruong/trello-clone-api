import express from "express";
import { BoardValidations } from "*/validations/board.validation";
import { BoardControllers } from "*/controllers/board.controller";

const router = express.Router();

router
  .route("/")
  .post(BoardValidations.createNewBoard, BoardControllers.createNewBoard);

export const BoardRoutes = router;
