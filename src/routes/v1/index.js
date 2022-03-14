import express from "express";
import { BoardRoutes } from "./board.route";

const router = express.Router()

// Board APIs
router.use("/boards",BoardRoutes)
export const apiV1 = router