import {Router} from 'express';
import userController from '../controllers/user.controller.js';
import { validId, validUser } from "../middlewares/global.middlewares.js";
import {authMiddleware} from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/create", userController.create);
router.get("/", userController.findAll);
router.get("/:id", authMiddleware, validId, validUser, userController.findById);
router.patch("/:id", validId, validUser, userController.update)

export default router; 