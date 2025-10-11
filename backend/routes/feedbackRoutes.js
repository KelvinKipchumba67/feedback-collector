import express from "express";
import { getFeedbacks, createFeedback, deleteFeedback, markResolved } from "../controllers/feedbackController.js";

const router = express.Router();

router.get("/", getFeedbacks);
router.post("/", createFeedback);
router.delete("/:id", deleteFeedback);
router.put("/:id/resolve", markResolved);

export default router;
