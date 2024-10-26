import express from "express";
import { login, logout, signup,getUserDetails } from "../controllers/auth.controller.js";
import authenticateUser from "../middlewares/authenticateUser.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/user", authenticateUser,getUserDetails);

export default router;
