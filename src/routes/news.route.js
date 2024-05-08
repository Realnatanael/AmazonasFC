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
    isLiked
 } from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/create", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topNews)
router.get("/", (req, res) => {
    res.send("Hello, world!");
  });
router.get("/search", searchByTitle)
router.get("/byUser", authMiddleware, byUser)
router.get("/:id", authMiddleware, findById)
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, erase);
router.patch("/like/:id", authMiddleware, likeNews);
router.post("/comment/:id", authMiddleware, addComment);
router.delete("/comment/:idNews/:idComment", authMiddleware, deleteComment);
router.get("/isLiked/:id", authMiddleware, isLiked);

export default router;