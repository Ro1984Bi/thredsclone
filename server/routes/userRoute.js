import express from "express";
import {
  followUnfollow,
  freeze,
  getSuggestedUsers,
  getUserProfile,
  login,
  logout,
  signup,
  update,
} from "../controllers/userController.js";
import protectedRoute from "../middlewares/protectedRoute.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectedRoute, getSuggestedUsers);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/follow/:id", protectedRoute, followUnfollow);
router.put("/update/:id", protectedRoute, update);
router.put("/freeze", protectedRoute, freeze);
export default router;
