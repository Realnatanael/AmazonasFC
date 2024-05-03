import {Router} from "express";
const router = Router();
import {
    create, 
    findAll, 
    topNews, 
    findById, 
    searchByTitle, 
    byUser, 
    update, 
    erase, 
    likeNews, 
    addComment,
    deleteComment,
 } from "../controllers/news.controller.js";
import { authMiddleware } from "../middllewares/auth.middlewares.js";

router.post("/create", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topNews)
router.get("/search", searchByTitle)
router.get("/byUser", authMiddleware, byUser)
router.get("/:id", authMiddleware, findById)
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, erase);
router.patch("/like/:id", authMiddleware, likeNews);
router.post("/comment/:id", authMiddleware, addComment);
router.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);

export default router;