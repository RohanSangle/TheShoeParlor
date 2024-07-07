import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/login", signin);
router.post("/register", signup);

export default router;