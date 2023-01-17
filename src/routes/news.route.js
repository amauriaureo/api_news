import { Router } from "express";
const router = Router();

import {create, findAll} from "../controllers/news.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);
router.get("/", findAll);

export default router;