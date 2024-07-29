import express from "express";
import {
  createPost,
  deletePost,
  getFeedPost,
  getPost,
  getUserPosts,
  likeUnlike,
  replyPost,
} from "../controllers/postController.js";
import protectedRoute from "../middlewares/protectedRoute.js";

const router = express.Router();

router.get("/feed", protectedRoute, getFeedPost);
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", protectedRoute, createPost);
router.put("/like/:id", protectedRoute, likeUnlike);
router.delete("/:id", protectedRoute, deletePost);
router.put("/reply/:id", protectedRoute, replyPost);

export default router;
