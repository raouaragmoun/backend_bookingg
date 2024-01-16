import  Express  from "express";
import { login, register } from "../controller/authController.js";
const router = Express.Router();

router.post("/login", login);

router.post("/register", register);

export default router;
