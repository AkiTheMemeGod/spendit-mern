import express from 'express';
import User from '../models/User.js';
import { register_User, login_User } from '../controllers/authControllers.js';
import authMiddleware from '../middleware/auth_middleware.js';
const router = express.Router()

router.post("/register",register_User)
router.post("/login",login_User)
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});
export default router; 