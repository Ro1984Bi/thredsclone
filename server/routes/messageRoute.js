import express from "express";
import protectedRoute from "../middlewares/protectedRoute.js";
import {
  getConvesations,
  getMessages,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/conversations", protectedRoute, getConvesations);
router.get("/:otherUserId", protectedRoute, getMessages);
router.post("/", protectedRoute, sendMessage);

export default router;
