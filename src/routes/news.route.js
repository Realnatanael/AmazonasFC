import {Router} from "express";
const router = Router();

import {create, findAll, topNews } from "../controllers/news.controller.js";
import { authMiddleware } from "../middllewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topNews)

export default router;