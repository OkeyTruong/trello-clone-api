import express from "express";
import { BoardRoutes } from "./board.route";
import { ColumnRoutes } from "./column.route";

const router = express.Router()

// Board APIs
router.use("/boards",BoardRoutes)

// Column APIs
router.use("/columns",ColumnRoutes)
export const apiV1 = router