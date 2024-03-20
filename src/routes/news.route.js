import {Router} from "express";
const router = Router();

import {create, findAll } from "../controllers/news.controller.js";
import { authMiddleware } from "../middllewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)

export default router;