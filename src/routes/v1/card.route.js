import express from "express";
import { CardControllers } from "../../controllers/card.controller";
import { CardValidations } from "../../validations/card.validation";

const router = express.Router();

router
    .route("/")
    .post(CardValidations.createNewCard, CardControllers.createNewCard);

router.route("/:id")
    .put(CardValidations.updatedCard, CardControllers.updatedCard)
    .delete(CardControllers.deleteCard);
export const CardRoutes = router;
