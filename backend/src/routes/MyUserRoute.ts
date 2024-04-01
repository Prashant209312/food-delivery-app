import express from "express";
import MyUserController from "../controllers/MyUSerController";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser);
export default router;
