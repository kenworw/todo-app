import express from "express";
import { authUser, registerUser, logoutUser } from "../controllers/userController.js";
const router = express.Router();
import protect  from "../middleware/authMiddleware.js";


router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(protect, logoutUser);

export default router;
