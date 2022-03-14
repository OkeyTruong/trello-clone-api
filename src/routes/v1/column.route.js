import express from "express";
import { ColumnControllers } from "*/controllers/column.controller";
import { ColumnValidations } from "*/validations/column.validation";

const router = express.Router();

router
  .route("/")
  .post(ColumnValidations.createNewColumn, ColumnControllers.createNewColumn);

router
  .route("/:id")
  .put(ColumnValidations.updateColumn, ColumnControllers.updateColumn)
  .delete(ColumnControllers.deleteColumn);

export const ColumnRoutes = router;
